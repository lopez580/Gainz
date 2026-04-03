
import { NextResponse, NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function proxy(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET })
    console.log('token:', token)

    const protectedRoutes = ['/dashboard', '/entrenamientos', '/nutricion']
    const isProtected = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    )

    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/entrenamientos/:path*', '/nutricion/:path*']
}