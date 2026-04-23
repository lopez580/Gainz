import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import authConfig from "./auth.config"

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id
            return token
        },
        async session({ session, token }) {
            if (token) session.user.id = token.id as string
            return session
        }
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string }
                })
                if (!user) return null
                const passwordMatch = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                )
                if (!passwordMatch) return null
                return { id: user.id, email: user.email, name: user.name }
            }
        })
    ],
})