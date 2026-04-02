export { auth as middleware } from "@/auth"

export const config = {
    matcher: ['/dashboard/:path*', '/entrenamientos/:path*', '/nutricion/:path*']
}