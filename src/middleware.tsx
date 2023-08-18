import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authTokens')

  if (request.nextUrl.pathname.startsWith('/dashboard') && !authToken) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('authTokens')
    return response
  }

  if (authToken && request.nextUrl.pathname.startsWith('/login')) {
    const response = NextResponse.redirect(new URL('/dashboard', request.url))
    return response
  }
}

// Paths for this middleware act
export const config = {
  matcher: ['/dashboard(.*)', '/login']
}
