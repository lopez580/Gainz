import type { NextAuthConfig } from "next-auth"

export default {
    pages: {
        signIn: "/login",
    },
    providers: []
} satisfies NextAuthConfig