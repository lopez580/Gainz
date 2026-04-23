import React from 'react'
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
interface Props {
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
    console.log('routine:', JSON.stringify(routine, null, 2))

    const exercises = await prisma.exercise.findMany()


    return (
        <div>
            <main className="max-w-7xl mx-auto px-6 pt-10 pb-20">
                <div className="flex flex-col gap-2 mb-8">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-white uppercase">
                        {isNueva ? 'Nueva Rutina' : 'Edit Routine'}
                    </h1>
                    <p className="font-body text-on-surface-variant max-w-2xl">
                        {isNueva ? 'Crea tu nueva rutina de entrenamiento.' : 'Refine your performance architecture.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left Column */}
                    <section className="md:col-span-7 space-y-6">
                        {/* Routine Identity */}
                        <div className="bg-surface-container p-6 rounded-xl border-l-4 border-primary">
                            <label className="font-label text-[10px] uppercase font-bold tracking-widest text-primary block mb-2">Routine Title</label>
                            <input
                                className="w-full bg-surface-container-high border-none focus:ring-0 text-2xl font-display font-bold text-white px-0 placeholder:text-outline-variant rounded-xl px-4 py-2"
                                type="text"
                                defaultValue={routine?.name ?? ''}
                                placeholder="Nombre de la rutina..."
                            />
                        </div>

                        <div className="bg-surface-container p-6 rounded-xl">
                            <label className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant block mb-2">Descripción</label>
                            <input
                                className="w-full bg-surface-container-high border-none focus:ring-0 text-base text-white px-0 placeholder:text-outline-variant rounded-xl px-4 py-2"
                                type="text"
                                defaultValue={routine?.description ?? ''}
                                placeholder="Descripción opcional..."
                            />
                        </div>

                        {/* Exercise List */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <h2 className="font-display text-xl font-bold text-white">Active Exercises</h2>
                                <span className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                                    {routine?.exercises?.length ?? 0} Selected
                                </span>
                            </div>

                            {isNueva || !routine?.exercises?.length ? (
                                <div className="flex flex-col items-center justify-center p-12 bg-surface-container rounded-xl border border-dashed border-outline-variant/30">
                                    <span className="material-symbols-outlined text-on-surface-variant text-5xl mb-3">fitness_center</span>
                                    <p className="font-label text-on-surface-variant uppercase tracking-widest text-sm">
                                        Añade ejercicios desde la librería
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {routine.exercises.map((re) => (
                                        <div key={re.id} className="bg-surface-container rounded-xl overflow-hidden hover:bg-surface-container-high transition-all">
                                            <div className="flex items-center p-4 gap-4">
                                                <span className="material-symbols-outlined text-outline">drag_indicator</span>
                                                <div className="flex-grow">
                                                    <h3 className="font-display font-bold text-lg text-white">{re.exercise.name}</h3>
                                                    <p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">{re.exercise.muscleGroup}</p>
                                                </div>
                                                <button className="material-symbols-outlined text-error/60 hover:bg-error/10 p-2 rounded-full transition-all">delete</button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 px-4 pb-4">
                                                <div className="bg-surface-container-low p-3 rounded-lg">
                                                    <label className="block font-label text-[10px] uppercase font-bold text-on-surface-variant mb-1">Target Sets</label>
                                                    <input
                                                        className="w-full bg-transparent border-none focus:ring-0 text-xl font-display font-bold text-primary p-0"
                                                        type="number"
                                                        defaultValue={re.sets}
                                                    />
                                                </div>
                                                <div className="bg-surface-container-low p-3 rounded-lg">
                                                    <label className="block font-label text-[10px] uppercase font-bold text-on-surface-variant mb-1">Target Reps</label>
                                                    <input
                                                        className="w-full bg-transparent border-none focus:ring-0 text-xl font-display font-bold text-primary p-0"
                                                        type="number"
                                                        defaultValue={re.reps}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Right Column: Exercise Library */}
                    <section className="md:col-span-5 h-[calc(100vh-12rem)] sticky top-24 flex flex-col">
                        <div className="bg-surface-container rounded-xl p-6 h-full flex flex-col border border-white/5">
                            <h2 className="font-display text-xl font-bold text-white mb-4">Exercise Library</h2>
                            <div className="flex-grow overflow-y-auto space-y-2 pr-2">
                                {exercises.map(exercise => (
                                    <div key={exercise.id} className="group flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-highest transition-all border border-transparent hover:border-primary/20">
                                        <div>
                                            <h4 className="font-body font-bold text-sm text-white">{exercise.name}</h4>
                                            <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">{exercise.muscleGroup}</p>
                                        </div>
                                        <button className="material-symbols-outlined text-primary bg-primary/10 hover:bg-primary hover:text-on-primary p-2 rounded-lg transition-all">add</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Action Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl border-t border-white/5 py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-4 w-full md:w-auto">
                        <a href="/rutinas" className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-surface-container-highest text-on-surface font-bold font-label text-xs uppercase tracking-widest hover:bg-surface-bright transition-all">
                            Cancel
                        </a>
                        <button className="flex-1 md:flex-none px-12 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold font-label text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                            {isNueva ? 'Crear Rutina' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )


}
