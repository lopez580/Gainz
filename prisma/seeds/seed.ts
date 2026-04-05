import { prisma } from '../../src/lib/prisma'


async function main() {
    await prisma.exercise.createMany({
        data: [
            { name: 'press banca con mancuernas', description: 'ejercicio de empuje horizontal con mancuernas ', muscleGroup: 'pecho' },
            { name: 'curl bicep con mancuerna', description: 'ejercicio pull con mancuernas ', muscleGroup: 'bicep' },
            { name: 'pull over con cuerda', description: 'ejercicio de pull enfocado en dorsales ', muscleGroup: 'espalda' },
            { name: 'Sentadilla con barra', description: 'Ejercicio compuesto para tren inferior', muscleGroup: 'pierna' },
            { name: 'Press militar', description: 'Ejercicio de empuje vertical para hombros', muscleGroup: 'hombro' },
            { name: 'Peso muerto', description: 'Ejercicio compuesto para espalda y pierna', muscleGroup: 'espalda' },
            { name: 'Fondos en paralelas', description: 'Ejercicio de empuje para pecho y triceps', muscleGroup: 'tricep' },
            { name: 'Remo con barra', description: 'Ejercicio de tirón para espalda', muscleGroup: 'espalda' },
            { name: 'Extensión de tricep con cuerda', description: 'Ejercicio de aislamiento para triceps', muscleGroup: 'tricep' },
            { name: 'Prensa de pierna', description: 'Ejercicio de cuádriceps en máquina', muscleGroup: 'pierna' },

        ]
    })
    await prisma.routine.create({
        data: {
            name: 'Push Day',
            description: 'pecho, hombro, triceps',
            userId: 'cmni733wu00002wu0r1t5ylny'
        }
    })
    const routine = await prisma.routine.findFirst({
        where: { userId: 'cmni733wu00002wu0r1t5ylny' }
    })
    const exercises = await prisma.exercise.findMany()

    await prisma.workoutLog.create({
        data: {
            userId: 'cmni733wu00002wu0r1t5ylny',
            routineId: routine!.id,
            notes: 'Buen entreno',
            sets: {
                create: [
                    { exerciseId: exercises[0].id, reps: 10, weight: 60 },
                    { exerciseId: exercises[0].id, reps: 10, weight: 60 },
                    { exerciseId: exercises[0].id, reps: 8, weight: 65 },
                ]
            }
        }
    })
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())