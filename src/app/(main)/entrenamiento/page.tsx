import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import EntrenamientosClient from "./EntrenamientosClient"

export default async function EntrenamientosPage() {
  const session = await auth()
  const userId = session?.user?.id
  const exercises = await prisma.exercise.findMany()

  const workouts = await prisma.workoutLog.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
    include: {
      routine: true,
      sets: { include: { exercise: true } }
    }
  })

  const routines = await prisma.routine.findMany({
    where: { userId }
  })

  return (
    <EntrenamientosClient 
      workouts={workouts} 
      routines={routines} 
      exercises={exercises}
      userId={userId ?? ''}
    />
  )
}