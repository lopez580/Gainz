'use client'
import { useState } from "react"

interface LogWorkoutProps {
    isOpen: boolean
    onclose: () => void
    routines: Routine[]
    exercises: Exercise[]
    userId: string
}
interface Routine {
    id: string
    name: string
    description: string | null
}
interface Exercise {
    id: string
    name: string
    muscleGroup: string
}

interface setInput {
    exerciseId: string
    exerciseName: string
    reps: number
    weight: number
}

export default function LogWorkout({ isOpen, onclose, routines, exercises, userId }: LogWorkoutProps) {
    const [selectedRoutineId, setSelectedRoutineId] = useState('')
    const [sets, setSets] = useState<setInput[]>([])
    const [notes, setNotes] = useState('')
    const [activeTab, setActiveTab] = useState<'routine' | 'manual'>('routine')
    if (!isOpen) return null

    const handleSave = async () => {
        if (sets.length === 0) return
        await fetch('/api/workouts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId,
                routineId: selectedRoutineId || null,
                notes,
                sets: sets.map(s => ({
                    exerciseId: s.exerciseId,
                    reps: s.reps,
                    weight: s.weight
                }))
            })
        })
        setSets([])
        setNotes('')
        setSelectedRoutineId('')
        onclose()
        window.location.reload()
    }

    const handleAddSet = (exerciseId: string, exerciseName: string) => {
        setSets([...sets, { exerciseId, exerciseName, reps: 0, weight: 0 }])
    }

    const handleUpdateSet = (index: number, field: 'reps' | 'weight', value: number) => {
        const updatedSets = [...sets]
        updatedSets[index] = { ...updatedSets[index], [field]: value }
        setSets(updatedSets)
    }
    const handleRemoveSet = (index: number) => {
        setSets(sets.filter((_, i) => i !== index))
    }
    return (

        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-surface-container-lowest/80 backdrop-blur-md">
            {/* Log Workout Modal: Responsive Widths */}
            <div className="glass-panel w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-outline-variant/30 shadow-2xl flex flex-col transition-all duration-300">
                {/* Modal Header & Tabs */}
                <div className="p-6 md:p-8 pb-0 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-tight text-on-surface">Log Workout</h2>
                        <button onClick={onclose} className="p-2 hover:bg-surface-container-highest rounded-full transition-colors group">
                            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface">close</span>
                        </button>
                    </div>
                    {/* Tabs */}
                    <div className="flex border-b border-outline-variant/30">
                        <button
                            onClick={() => setActiveTab('routine')}
                            className={`px-6 py-3 font-headline font-bold text-xs md:text-sm tracking-widest uppercase transition-all ${activeTab === 'routine'
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-on-surface-variant hover:text-on-surface'
                                }`}
                        >
                            From Routine
                        </button>
                        <button
                            onClick={() => setActiveTab('manual')}
                            className={`px-6 py-3 font-headline font-bold text-xs md:text-sm tracking-widest uppercase transition-all ${activeTab === 'manual'
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-on-surface-variant hover:text-on-surface'
                                }`}
                        >
                            Manual
                        </button>

                    </div>
                </div>
                {/* Modal Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                    {/* Tabs content */}
                    {activeTab === 'routine' ? (
                        <div className="space-y-3">
                            <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Select Routine</label>
                            <div className="relative max-w-lg">
                                <select
                                    value={selectedRoutineId}
                                    onChange={(e) => setSelectedRoutineId(e.target.value)}
                                    className="w-full bg-surface-container-high border-none rounded-xl py-4 px-4 text-on-surface font-headline appearance-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                                >
                                    <option value="">Sin rutinas</option>
                                    {routines.map(routine => (
                                        <option key={routine.id} value={routine.id}>{routine.name}</option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Añadir Ejercicio</label>
                            <div className="relative">
                                <select
                                    onChange={(e) => {
                                        const exercise = exercises.find(ex => ex.id === e.target.value)
                                        if (exercise) handleAddSet(exercise.id, exercise.name)
                                        e.target.value = ''
                                    }}
                                    className="w-full bg-surface-container-high border-none rounded-xl py-4 px-4 text-on-surface font-headline appearance-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                                >
                                    <option value="">Selecciona un ejercicio...</option>
                                    {exercises.map(exercise => (
                                        <option key={exercise.id} value={exercise.id}>
                                            {exercise.name} — {exercise.muscleGroup}
                                        </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                            </div>
                        </div>
                    )}
                    {/* Exercise List */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-outline-variant/10 pb-2">
                            <h3 className="font-headline font-bold text-lg md:text-xl">Exercises</h3>
                            <span className="font-label text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
                                {sets.length} Ejercicios
                            </span>
                        </div>

                        {/* Sets */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {sets.map((set, index) => (
                                <div key={index} className="bg-surface-container-high/40 rounded-2xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h4 className="font-headline font-bold text-base text-on-surface">{set.exerciseName}</h4>
                                            <p className="font-label text-xs text-on-surface-variant">Serie {index + 1}</p>
                                        </div>
                                        <button onClick={() => handleRemoveSet(index)} className="text-error/60 hover:text-error transition-colors p-1">
                                            <span className="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Reps</label>
                                            <input
                                                type="number"
                                                value={set.reps}
                                                onChange={(e) => handleUpdateSet(index, 'reps', Number(e.target.value))}
                                                className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Weight (kg)</label>
                                            <input
                                                type="number"
                                                value={set.weight}
                                                onChange={(e) => handleUpdateSet(index, 'weight', Number(e.target.value))}
                                                className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    {/* Session Notes */}
                    <div className="space-y-3">
                        <label className="font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Session Notes</label>
                        <textarea className="w-full bg-surface-container-high border-none rounded-xl p-5 text-on-surface font-body text-base focus:ring-2 focus:ring-primary/50 resize-none placeholder:text-on-surface-variant/40 min-h-[120px]" placeholder="How did you feel? Any fatigue? Focus areas?"></textarea>
                    </div>
                </div>
                <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-4">
                    <button onClick={onclose} className="flex-1 py-4 md:py-5 font-headline font-bold text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-all">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="flex-[2] py-4 md:py-5 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-black tracking-wider uppercase rounded-xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all">
                        Save Workout
                    </button>
                </div>
            </div>
        </div>



    )
}