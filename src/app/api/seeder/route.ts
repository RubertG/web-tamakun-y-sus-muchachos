import { CommentInsert, UserInsert } from '@/modules/core/interfaces/db/db'
import { createClientServer } from '@/modules/core/utils/supabase/create-client-server'
import { NextResponse } from 'next/server'

const fakeUsers: UserInsert[] = [
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433e1',
    name: 'Alice',
    is_admin: true,
    email: 'alice@gmail.com',
    google_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e1'
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433e2',
    name: 'Bob',
    is_admin: false,
    email: 'bob@gmail.com',
    google_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e2'
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433e3',
    name: 'Charlie',
    is_admin: false,
    email: 'charlie@gmail.com',
    google_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e3'
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433e4',
    name: 'David',
    is_admin: false,
    email: 'david@gmail.com',
    google_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e4'
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433e5',
    name: 'Eve',
    is_admin: false,
    email: 'eve@gmail.com',
    google_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e5'
  }
]

const fakeComments: CommentInsert[] = [
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c1',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e1',
    approved: true
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c2',
    comment: 'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e2'
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c3',
    comment: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e3',
    approved: false
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c4',
    comment: 'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e4',
    approved: false
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c5',
    comment: 'Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e5',
    approved: false
  },
  {
    id: '00858aa0-3dbc-4c6a-a440-79d7ade433c6',
    comment:
      'Nulla sit amet est. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    user_id: '00858aa0-3dbc-4c6a-a440-79d7ade433e1',
    approved: false
  }
]

// This route is used to seed the database with data for development purposes
export async function GET() {
  const supabase = await createClientServer()

  // Delete all rows from the database tables
  const usersIds = fakeUsers.map((user) => user.id || '')
  const { error } = await supabase.from('users').delete().in('id', usersIds)

  if (error) {
    return NextResponse.json(
      {
        message: 'Ocurrió un error al eliminar las filas de la tabla User',
        error
      },
      { status: 500 }
    )
  }

  // Insert new user rows into the database table
  const { error: insertError } = await supabase.from('users').insert(fakeUsers)

  if (insertError) {
    return NextResponse.json(
      {
        message: 'Ocurrió un error al insertar las filas de la tabla User',
        error: insertError
      },
      { status: 500 }
    )
  }

  // Insert new comment rows into the database table]
  const { error: insertCommentError } = await supabase.from('comments').insert(fakeComments)

  if (insertCommentError) {
    return NextResponse.json(
      {
        message: 'Ocurrió un error al insertar las filas de la tabla Comment',
        error: insertCommentError
      },
      { status: 500 }
    )
  }

  return NextResponse.json({
    message: 'Datos insertados con éxito'
  })
}
