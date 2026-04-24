
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const body = await req.json()
        const {id} = await params
        const routine = await prisma.routine.update({
            where: { id },
            data: {
                name: body.name,
                description: body.description,
            }
        })
        return NextResponse.json(routine)
    } catch (error) {
        return NextResponse.json({ error: 'Error al actualizar rutina' }, { status: 500 })
    }
}


export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params
        await prisma.routine.delete({
            where: { id }
        })
        return NextResponse.json({ message: 'Rutina eliminada' })
    } catch (error) {
        return NextResponse.json({ error: 'Error al eliminar rutina' }, { status: 500 })
    }
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params
        const routine = await prisma.routine.findUnique({
            where: { id },
            include: {
                exercises: {
                    include: {
                        exercise: true
                    }
                }
            }
        })
        if (!routine) {
            return NextResponse.json({ error: 'Rutina no encontrada' }, { status: 404 })
        }
        return NextResponse.json(routine)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener rutina' }, { status: 500 })
    }
}
