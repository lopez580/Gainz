import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const exercises = await prisma.exercise.findMany()
        return NextResponse.json(exercises)
    } catch (error) {
        return NextResponse.json({ error: 'error al obtener los ejercicios' }, { status: 500 })
    }

}


export async function POST(req: Request) {
    try {

        const body = await req.json()
        const exercise = await prisma.exercise.create({
            data: {
                name: body.name,
                description: body.description,
                muscleGroup: body.muscleGroup,
            }
        })

        return NextResponse.json(exercise, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: 'error al crear el ejercicio' }, { status: 500 })
    }

}