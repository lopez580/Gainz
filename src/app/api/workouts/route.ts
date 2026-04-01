import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const userId = searchParams.get('userId')

        const workouts = await prisma.workoutLog.findMany({
            where: { userId: userId ?? undefined },
            include: {
                routine: true,
                sets: {
                    include: {
                        exercise: true
                    }
                }
            },
            orderBy: { date: 'desc' }
        })
        return NextResponse.json(workouts)
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener workouts' }, { status: 500 })
    }
}


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const workout = await prisma.workoutLog.create({
            data: {
                userId: body.userId,
                routineId: body.routineId,
                notes: body.notes,
                sets: {
                    create: body.sets.map((set: any) => ({
                        exerciseId: set.exerciseId,
                        reps: set.reps,
                        weight: set.weight,
                    }))
                }
            },
            include: {
                sets: {
                    include: { exercise: true }
                }
            }
        })
        return NextResponse.json(workout, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear workout' }, { status: 500 })
    }
}