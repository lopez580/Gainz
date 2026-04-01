
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json()
        const routine = await prisma.routine.update({
            where: { id: params.id },
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


export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.routine.delete({
            where: { id: params.id }
        })
        return NextResponse.json({ message: 'Rutina eliminada' })
    } catch (error) {
        return NextResponse.json({ error: 'Error al eliminar rutina' }, { status: 500 })
    }
}
