
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function GET(_req: Request, { params }: { params: { id: string } }) {
    try {
        const exercise = await prisma.exercise.findUnique({
            where: { id: params.id }
        })
        if (!exercise) {
            return NextResponse.json({ error: 'Ejercicio no encontrado' }, { status: 404 })
        }
        return NextResponse.json(exercise)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener ejercicio' }, { status: 500 })
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json()
        const exercise = await prisma.exercise.update({
            where: { id: params.id },
            data: {
                name: body.name,
                description: body.description,
                muscleGroup: body.muscleGroup,
            }
        })
        return NextResponse.json(exercise)
    } catch (error) {
        return NextResponse.json({ error: 'Error al actualizar ejercicio' }, { status: 500 })
    }
}


export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.exercise.delete({
            where: { id: params.id }
        })
        return NextResponse.json({ message: 'Ejercicio eliminado' })
    } catch (error) {
        return NextResponse.json({ error: 'Error al eliminar ejercicio' }, { status: 500 })
    }
}