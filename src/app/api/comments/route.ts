import { CommentResponse, RouteResponse } from '@/modules/core/interfaces/api/api'
import { CommentInsert } from '@/modules/core/interfaces/db/db'
import { CommentInsertSchema } from '@/modules/core/schemas/api/comment'
import { COMMENTS_SIZE } from '@/modules/core/utils/const/comments'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { type NextRequest, NextResponse } from 'next/server'

/**
  Handles GET requests to retrieve comments from the database.
 
  @param {NextRequest} request - The incoming request object.
  @returns {Promise<RouteResponse<CommentResponse[]>>} - A promise that resolves to a RouteResponse containing an array of comments.
 
  The function processes the following query parameters:
  - `start` (optional): The starting index for pagination. Defaults to 0 if not provided.
  - `end` (optional): The ending index for pagination. Defaults to COMMENTS_SIZE if not provided.
  - `areActives` (optional): A boolean indicating whether to filter comments by their approval status. If not provided, all comments are retrieved.
 
  Possible response statuses:
  - 200: Comments retrieved successfully.
  - 400: Invalid query parameters.
  - 500: Failed to retrieve comments from the database.
*/
export async function GET(request: NextRequest): Promise<RouteResponse<CommentResponse[]>> {
  // Get query params
  let start: number, end: number
  let areActives: boolean | null

  try {
    start = Number(request.nextUrl.searchParams.get('start')) || 0
    end = Number(request.nextUrl.searchParams.get('end')) || COMMENTS_SIZE
    const areActivesParam = request.nextUrl.searchParams.get('areActives')
    areActives = areActivesParam === null ? null : areActivesParam === 'true'
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Parámetros de consulta no válidos',
        error
      },
      { status: 400 }
    )
  }

  let data = null
  let error = null
  const supabase = await createClientServer()

  if (areActives !== null) {
    const res = await supabase
      .from('comments')
      .select('*')
      .eq('approved', areActives)
      .order('created_at', { ascending: false })
      .range(start, end)

    data = res.data
    error = res.error
  } else {
    const res = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false })
      .range(start, end)

    data = res.data
    error = res.error
  }

  if (error || !data) {
    return NextResponse.json(
      {
        message: 'No se pudieron obtener los comentarios',
        error
      },
      { status: 500 }
    )
  }

  const comments = await Promise.all(
    data.map(async (comment) => {
      const { data, error } = await supabase.from('users').select('*').eq('id', comment.user_id)
      const user = data?.[0]

      return {
        ...comment,
        user_name: user?.name && !error ? user.name : 'Usuario desconocido',
        profile_picture: user?.profile_picture && !error ? user.profile_picture : ''
      }
    })
  )

  return NextResponse.json(
    {
      message: 'Comentarios obtenidos con éxito',
      data: comments
    },
    { status: 200 }
  )
}

/*
  Handles the POST request to insert a new comment.
 
  @param {} req - The incoming Next.js request object.
  @returns A promise that resolves to a RouteResponse object.
*/
export async function POST(req: NextRequest): Promise<RouteResponse> {
  const commentReq = (await req.json()) as CommentInsert

  // Validate comment
  const parseResult = CommentInsertSchema.safeParse(commentReq)

  if (!parseResult.success) {
    return NextResponse.json(
      {
        message: 'Comentario no válido',
        errors: parseResult.error.errors
      },
      { status: 400 }
    )
  }

  const supabase = await createClientServer()

  const { status, error } = await supabase.from('comments').upsert(commentReq)

  return NextResponse.json(
    {
      message: error ? 'No se pudo insertar el comentario' : 'Comentario agregado con éxito',
      error
    },
    { status }
  )
}
