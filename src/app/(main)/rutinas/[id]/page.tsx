import React from 'react'
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import EditarRutinaClient from "./EditarRutinaClient"
interface Props  {
    params: Promise<{ id: string }>

}

export default async function EditarRutinaspage({ params }: Props) {
    const { id } = await params
    const session = await auth()
    const userId = session?.user?.id
    const isNueva = id === 'nueva'

    const routine = isNueva ? null : await prisma.routine.findUnique({
        where: { id },
        include: {
            exercises: {
                include: { exercise: true }
            }
        }
    })


    const exercises = await prisma.exercise.findMany()
    


    return (
       <EditarRutinaClient
        routine={routine}
        exercises={exercises}
        isNueva={isNueva}
        userId={userId ?? ''}
       />
    )


}
