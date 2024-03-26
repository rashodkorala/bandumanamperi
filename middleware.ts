import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/auth') || pathname.startsWith('/_next/static') || pathname.startsWith('/api/auth/')) {
        return NextResponse.next();
    }

    const token = request.cookies.get('AuthToken');
    if (!token) {
        return NextResponse.redirect(new URL('/auth', request.nextUrl));
    }

    // Correctly constructing the URL for the API endpoint
    const verifyTokenUrl = new URL('/api/auth/verifyToken', request.nextUrl.origin);
    const response = await fetch(verifyTokenUrl.toString(), {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.log('Token verification failed, redirecting to /auth');
        return NextResponse.redirect(new URL('/auth', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'],
};
