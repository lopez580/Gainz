
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function GET(_req: Request, { params }: { params: { id: string } }) {
    try {
        const workout = await prisma.workoutLog.findUnique({
            where: { id: params.id },
            include: {
                routine: true,
                sets: {
                    include: { exercise: true }
                }
            }
        })
        if (!workout) {
            return NextResponse.json({ error: 'Workout no encontrado' }, { status: 404 })
        }
        return NextResponse.json(workout)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener workout' }, { status: 500 })
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json()
        const workout = await prisma.workoutLog.update({
            where: { id: params.id },
            data: {
                notes: body.notes,
                routineId: body.routineId,
            }
        })
        return NextResponse.json(workout)
    } catch (error) {
        return NextResponse.json({ error: 'Error al actualizar workout' }, { status: 500 })
    }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.workoutLog.delete({
            where: { id: params.id }
        })
        return NextResponse.json({ message: 'Workout eliminado' })
    } catch (error) {
        return NextResponse.json({ error: 'Error al eliminar workout' }, { status: 500 })
    }
}
