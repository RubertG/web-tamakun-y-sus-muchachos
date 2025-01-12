import { COMMENTS_SIZE } from '@/modules/core/const/comments'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { type NextRequest, NextResponse } from 'next/server'

/*
 GET /api/comments
 @param {Request} request
 @returns {Response}
 @description Get all comments
*/
export async function GET(request: NextRequest) {
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
        message: 'Error: Invalid query params',
        error
      },
      { status: 400 }
    )
  }
  console.log({ start, end, areActives })
  const supabase = await createClientServer()
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
    .range(start, 2)

  if (error) {
    return NextResponse.json(
      {
        message: 'Error: No se pudieron obtener los comentarios',
        error
      },
      { status: 500 }
    )
  }

  return NextResponse.json(
    {
      message: 'Comentarios obtenidos con éxito',
      data
    },
    { status: 200 }
  )
}
