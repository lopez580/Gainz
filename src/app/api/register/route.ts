
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs';



export async function POST(req: Request) {
    try {

        const body = await req.json()
        const { name, email, password } = body;
        const handlePassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: handlePassword
            }
        })
        return NextResponse.json(user, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 })
    }
}