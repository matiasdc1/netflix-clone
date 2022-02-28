import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const url = req.nextUrl.clone()
  url.pathname = '/browse'
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (pathname !== '/browse') {
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
