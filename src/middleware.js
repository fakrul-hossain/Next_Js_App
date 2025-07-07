import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // Example decoding (pseudo):
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  const isAdmin = user?.role === 'admin';
  const isServicesPage = request.nextUrl.pathname.startsWith('/Services');

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
