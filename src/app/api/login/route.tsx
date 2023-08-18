import { sign } from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const MAX_AGE = 60 * 60 * 24 * 30 // days

export async function POST(request: Request) {
  const body = await request.json()

  const { username, password } = body

  if (username !== 'pickelrick@science.com' || password !== 'ricksanchez') {
    return NextResponse.json(
      {
        message: 'Unauthorized'
      },
      {
        status: 401
      }
    )
  }

  // Always check this
  const secret = process.env.JWT_SECRET || ''

  const token = sign(
    {
      username
    },
    secret,
    {
      expiresIn: MAX_AGE
    }
  )

  const response = {
    message: 'Authenticated!',
    data: token
  }

  return new Response(JSON.stringify(response), {
    status: 200
  })
}
