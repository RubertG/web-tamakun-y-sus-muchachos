import {
  CommentResponse,
  RouteResponse
} from '@/modules/core/interfaces/api/api'
import { CommentInsert } from '@/modules/core/interfaces/db/db'
import { CommentInsertSchema } from '@/modules/core/schemas/api/comment'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { NextResponse, NextRequest } from 'next/server'

interface Params {
  params: Promise<{ id: string }>
}
/**
 * Handles GET requests to retrieve a comment from the database.
 *
 * @param {NextRequest} request - The incoming request object.
 * @param {Params} params - The route parameters.
 * @returns {Promise<RouteResponse>} - A promise that resolves to a RouteResponse containing the comment.

 * The function expects the following route parameters:
 * - `id`: The ID of the comment to retrieve.
*/
export async function GET(
  request: NextRequest,
  { params }: Params
): Promise<RouteResponse<CommentResponse>> {
  const id = (await params).id

  const supabase = await createClientServer()
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('id', id)

  if (error || !data) {
    return NextResponse.json(
      {
        message: 'No se pudo obtener el comentario',
        error
      },
      { status: 500 }
    )
  }

  if (data.length === 0) {
    return NextResponse.json(
      {
        message: 'Comentario no encontrado',
        error:
          'No se encontró el comentario con el id proporcionado'
      },
      { status: 404 }
    )
  }

  const { data: users } = await supabase
    .from('users')
    .select('*')
    .eq('id', data[0].user_id)
  const user = users?.[0]

  return NextResponse.json(
    {
      message: 'Comentario obtenido con éxito',
      data: {
        ...data[0],
        user_name: user?.name || 'Usuario desconocido',
        profile_picture: user?.profile_picture || ''
      }
    },
    { status: 200 }
  )
}

/**
 * Handles PUT requests to update a comment in the database.
 *
 * @param {NextRequest} request - The incoming request object.
 * @param {Params} params - The route parameters.
 * @returns {Promise<RouteResponse>} - A promise that resolves to a RouteResponse containing the updated comment.
 *
 * The function expects the following route parameters:
 * - `id`: The ID of the comment to update.
 */
export async function PUT(
  req: NextRequest,
  { params }: Params
): Promise<RouteResponse> {
  const id = (await params).id
  const commentReq = (await req.json()) as CommentInsert
  const commentParse =
    CommentInsertSchema.safeParse(commentReq)

  if (!commentParse.success) {
    return NextResponse.json(
      {
        message: 'Comentario no válido',
        errors: commentParse.error.errors
      },
      { status: 400 }
    )
  }

  const supabase = await createClientServer()
  const { error } = await supabase
    .from('comments')
    .update(commentReq)
    .eq('id', id)

  return NextResponse.json(
    {
      message: error
        ? 'No se pudo actualizar el comentario'
        : 'Comentario actualizado con éxito'
    },
    { status: error ? 500 : 200 }
  )
}

/**
 * Handles PUT requests to update a comment in the database.
 *
 * @param {NextRequest} request - The incoming request object.
 * @param {Params} params - The route parameters.
 * @returns {Promise<RouteResponse>} - A promise that resolves to a RouteResponse containing the updated comment.
 * The function expects the following route parameters:
 * - `id`: The ID of the comment to update.
 */
export async function DELETE(
  req: NextRequest,
  { params }: Params
): Promise<RouteResponse> {
  const id = (await params).id

  const supabase = await createClientServer()
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', id)

  if (error) {
    return NextResponse.json(
      {
        message: 'No se pudo eliminar el comentario',
        error
      },
      { status: 500 }
    )
  }

  return NextResponse.json(
    {
      message: 'Comentario eliminado con éxito'
    },
    { status: 200 }
  )
}
