'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { headers } from 'next/headers'

interface Exercise {
    id: string
    name: string
    muscleGroup: string
}

interface RoutineExercise {
    id: string
    sets: number
    reps: number
    exercise: Exercise
}

interface Routine {
    id: string
    name: string
    description: string | null
    exercises: RoutineExercise[]
}

interface Props {
    routine: Routine | null
    exercises: Exercise[]
    isNueva: boolean
    userId: string
}

export default function EditarRutinaClient({ routine, exercises, isNueva, userId }: Props) {
    const router = useRouter()
    const [name, setName] = useState(routine?.name ?? '')
    const [description, setDescription] = useState(routine?.description ?? '')
    const [routineExercises, setRoutineExercises] = useState<RoutineExercise[]>(routine?.exercises ?? [])
    const [searchExercise, setSearchExercise] = useState('')

    const handleAddExercise = async (exercise: Exercise) => {
        // Evitar duplicados
        if (routineExercises.some(re => re.exercise.id === exercise.id)) return

        const newRE = {
            id: crypto.randomUUID(),
            sets: 3,
            reps: 10,
            exercise
        }
        setRoutineExercises([...routineExercises, newRE])
    }

    const handleRemoveExercise = (id: string) => {
        setRoutineExercises(routineExercises.filter(re => re.id !== id))
    }

    const handleSave = async () => {
        if (isNueva) {
            await fetch('/api/routines', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    description,
                    userId,
                    exercises: routineExercises.map(re => ({
                        exerciseId: re.exercise.id,
                        sets: re.sets,
                        reps: re.reps
                    }))
                })
            })
        } else {
            await fetch(`/api/routines/${routine?.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    description,
                    exercises: routineExercises.map(re => ({
                        exerciseId: re.exercise.id,
                        sets: re.sets,
                        reps: re.reps
                    }))
                })
            })
        }
        router.push('/rutinas')
    }
    const filteredExercises = exercises.filter(ex =>
        ex.name.toLowerCase().includes(searchExercise.toLowerCase()) ||
        ex.muscleGroup.toLowerCase().includes(searchExercise.toLowerCase())
    )

    const handleDeleteExercise = async (exerciseId: string) => {
        await fetch(`/api/exercises/${exerciseId}`, {
            method: 'DELETE',
        })
        window.location.reload()
    }

    return (
        <div>
            <main className="max-w-7xl mx-auto px-6 pt-10 pb-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="font-display text-4xl font-bold tracking-tight text-white uppercase">
                            {isNueva ? 'Nueva Rutina' : 'Edit Routine'}
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="../rutinas"
                            className="px-8 py-3 rounded-xl bg-surface-container-highest text-on-surface font-bold font-label text-xs uppercase tracking-widest hover:bg-surface-bright transition-all"
                        >
                            Cancel
                        </a>
                        <button
                            onClick={handleSave}
                            className="px-12 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold font-label text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                        >
                            {isNueva ? 'Crear Rutina' : 'Save Changes'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left Column */}
                    <section className="md:col-span-7 space-y-6">
                        {/* Nombre */}
                        <div className="bg-surface-container p-6 rounded-xl border-l-4 border-primary">
                            <label className="font-label text-[10px] uppercase font-bold tracking-widest text-primary block mb-2">Routine Title</label>
                            <input
                                className="w-full bg-surface-container-high border-none focus:ring-0 text-2xl font-display font-bold text-white rounded-xl px-4 py-2"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre de la rutina..."
                            />
                        </div>

                        {/* Descripción */}
                        <div className="bg-surface-container p-6 rounded-xl">
                            <label className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant block mb-2">Descripción</label>
                            <input
                                className="w-full bg-surface-container-high border-none focus:ring-0 text-base text-white rounded-xl px-4 py-2"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descripción opcional..."
                            />
                        </div>

                        {/* Exercise List */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <h2 className="font-display text-xl font-bold text-white">Active Exercises</h2>
                                <span className="font-label text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                                    {routineExercises.length} Selected
                                </span>
                            </div>

                            {routineExercises.length === 0 ? (
                                <div className="flex flex-col items-center justify-center p-12 bg-surface-container rounded-xl border border-dashed border-outline-variant/30">
                                    <span className="material-symbols-outlined text-on-surface-variant text-5xl mb-3">fitness_center</span>
                                    <p className="font-label text-on-surface-variant uppercase tracking-widest text-sm">
                                        Añade ejercicios desde la librería
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {routineExercises.map((re) => (
                                        <div key={re.id} className="bg-surface-container rounded-xl overflow-hidden hover:bg-surface-container-high transition-all">
                                            <div className="flex items-center p-4 gap-4">
                                                <div className="flex-grow">
                                                    <h3 className="font-display font-bold text-lg text-white">{re.exercise.name}</h3>
                                                    <p className="font-label text-xs text-on-surface-variant uppercase">{re.exercise.muscleGroup}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveExercise(re.id)}
                                                    className="material-symbols-outlined text-error/60 hover:text-error p-2 rounded-full transition-all"
                                                >
                                                    delete
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 px-4 pb-4">
                                                <div className="bg-surface-container-low p-3 rounded-lg">
                                                    <label className="block font-label text-[10px] uppercase font-bold text-on-surface-variant mb-1">Sets</label>
                                                    <input
                                                        className="w-full bg-transparent border-none focus:ring-0 text-xl font-display font-bold text-primary p-0"
                                                        type="number"
                                                        defaultValue={re.sets}
                                                    />
                                                </div>
                                                <div className="bg-surface-container-low p-3 rounded-lg">
                                                    <label className="block font-label text-[10px] uppercase font-bold text-on-surface-variant mb-1">Reps</label>
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

                            <h2 className="font-display text-xl font-bold text-white mb-4 ">Exercise Library</h2>
                            <div className="flex items-center gap-2 bg-surface-container-high rounded-xl px-4 py-2">
                                <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
                                <input
                                    type="text"
                                    placeholder="Buscar ejercicio..."
                                    value={searchExercise}
                                    onChange={(e) => setSearchExercise(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white text-sm placeholder:text-on-surface-variant w-full"
                                />
                            </div>
                            <div className="flex-grow overflow-y-auto space-y-2 pr-2">
                                {filteredExercises.map(exercise => (
                                    <div
                                        key={exercise.id}
                                        className="group flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-highest transition-all border border-transparent hover:border-primary/20"
                                    >
                                        <div>
                                            <h4 className="font-body font-bold text-sm text-white">{exercise.name}</h4>
                                            <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">{exercise.muscleGroup}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
  <button 
  onClick={()=> handleDeleteExercise(exercise.id)}
  className="material-symbols-outlined text-error/60 hover:text-error p-2 rounded-lg transition-all">
    delete
  </button>
  <button className="material-symbols-outlined text-primary bg-primary/10 hover:bg-primary hover:text-on-primary p-2 rounded-lg transition-all">
    edit
  </button>
  <button
    onClick={() => handleAddExercise(exercise)}
    className="material-symbols-outlined text-primary bg-primary/10 hover:bg-primary hover:text-on-primary p-2 rounded-lg transition-all"
  >
    add
  </button>
</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    )
}