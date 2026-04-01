// src/app/api/routines/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET - listar rutinas del usuario
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const userId = searchParams.get('userId')

        const routines = await prisma.routine.findMany({
            where: { userId: userId ?? undefined },
            include: {
                workouts: {
                    orderBy: { date: 'desc' },
                    take: 1
                }
            }
        })
        return NextResponse.json(routines)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener rutinas' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const routine = await prisma.routine.create({
            data: {
                name: body.name,
                description: body.description,
                userId: body.userId,
            }
        })
        return NextResponse.json(routine, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear rutina' }, { status: 500 })
    }
}