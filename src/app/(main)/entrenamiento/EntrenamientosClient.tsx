"use client";
import { useState } from "react";
import LogWorkout from "@/components/LogWorkout";
interface Workout {
    id: string;
    date: Date;
    routine: { name: string } | null;
    sets: string[];
}

interface Routine {
    id: string;
    name: string;
    description: string | null;
}

interface Exercise {
    id: string;
    name: string;
    muscleGroup: string;
}
interface Props {
    workouts: Workout[];
    routines: Routine[];
    exercises: Exercise[];
    userId: string;
}
export default function EntrenamientosClient({
    workouts,
    routines,
    exercises,
    userId,
}: Props) {
    const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    const [weekOffset, setWeekOffset] = useState(0);

    // Obtener días de la semana actual
    const getWeekDays = () => {
        const today = new Date()
        const monday = new Date(today)
        monday.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7)

        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(monday)
            date.setDate(monday.getDate() + i)
            return date
        })
    }

    const weekDays = getWeekDays()

    // Buscar workout por día
    const getWorkoutForDay = (date: Date) => {
        return workouts.find((w) => {
            const workoutDate = new Date(w.date);
            return (
                workoutDate.getDate() === date.getDate() &&
                workoutDate.getMonth() === date.getMonth() &&
                workoutDate.getFullYear() === date.getFullYear()
            );
        });
    };
    return (
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-5xl font-bold font-headline tracking-tighter text-on-surface mb-2">
                        Workouts
                    </h1>
                    <p className="font-label text-on-surface-variant tracking-wider uppercase text-xs">
                        Performance Editorial / 2024
                    </p>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl font-headline font-bold text-on-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                    <span className="material-symbols-outlined">add_circle</span>
                    Log Workout
                </button>
                <LogWorkout isOpen={isOpen} onclose={() => setIsOpen(false)} routines={routines} exercises={exercises} userId="user-id" />
            </div>

            {/* Weekly Navigation */}
            <div className="bg-surface-container-low rounded-xl mb-8 p-1">
                <div className="flex items-center justify-between p-4">
                    <button onClick={() => setWeekOffset(weekOffset - 1)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="font-headline font-bold text-xl tracking-tight">
                            {weekDays[0].toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })} - {weekDays[6].toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}
                        </span>
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Semana actual</span>
                    </div>
                    <button onClick={() => setWeekOffset(weekOffset + 1)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {weekDays.map((date, i) => {
                    const workout = getWorkoutForDay(date)
                    const isToday = date.toDateString() === new Date().toDateString()

                    return (
                        <div key={i} className="flex flex-col h-full">
                            <div className="mb-3 px-2 flex justify-between items-center">
                                <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                                    {dayNames[i]}
                                </span>
                                <span className={`font-headline text-lg font-medium ${isToday ? 'text-primary font-bold' : 'text-on-surface-variant opacity-50'}`}>
                                    {date.getDate()}
                                </span>
                            </div>

                            {workout ? (
                                <div
                                    onClick={() => setSelectedWorkout(workout)}
                                    className="flex-1 min-h-[180px] bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-3">
                                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    </div>
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="font-headline font-bold text-xl leading-tight mb-1">
                                                {workout.routine?.name ?? 'Sin rutina'}
                                            </h3>
                                            <p className="font-label text-[11px] text-on-surface-variant tracking-wide">
                                                {workout.sets.length} SERIES
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="w-full bg-surface-container-highest h-1 mb-2">
                                                <div className="bg-primary h-full w-full"></div>
                                            </div>
                                            <span className="font-label text-[9px] text-primary uppercase font-bold">Completado</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="flex-1 min-h-[180px] bg-surface-container-low/30 rounded-xl p-5 border border-dashed border-outline-variant/20 hover:border-primary/30 flex flex-col items-center justify-center group transition-all"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl mb-2">add</span>
                                    <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">Sin entrenamiento</span>
                                </button>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* log workout */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-surface-container rounded-xl p-8 min-h-[400px]">
                    {selectedWorkout ? (
                        <div className="md:col-span-12 bg-surface-container rounded-xl p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2 block">Detalle</span>
                                    <h2 className="font-headline text-3xl font-black tracking-tight">
                                        {selectedWorkout.routine?.name ?? 'Sin rutina'}
                                    </h2>
                                    <p className="text-on-surface-variant text-sm mt-1">
                                        {new Date(selectedWorkout.date).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedWorkout(null)}
                                    className="p-2 rounded-lg hover:bg-surface-container-high transition-colors"
                                >
                                    <span className="material-symbols-outlined text-on-surface-variant">close</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                {selectedWorkout.sets.map((set: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-surface-container-high rounded-xl border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">fitness_center</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-white">{set.exercise?.name}</p>
                                                <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider">
                                                    Serie {i + 1}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-8">
                                            <div className="text-center">
                                                <p className="font-headline font-black text-xl text-white">{set.reps}</p>
                                                <p className="font-label text-[10px] uppercase text-on-surface-variant">Reps</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="font-headline font-black text-xl text-primary">{set.weight ?? '-'}</p>
                                                <p className="font-label text-[10px] uppercase text-on-surface-variant">Kg</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="md:col-span-12 bg-surface-container rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px]">
                            <span className="material-symbols-outlined text-on-surface-variant text-5xl mb-4">fitness_center</span>
                            <p className="font-label text-on-surface-variant uppercase tracking-widest text-sm">Selecciona un día para ver el detalle</p>
                        </div>
                    )}
                </div>
                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                            Volume
                        </span>
                        <div>
                            <div className="text-6xl font-headline font-bold text-primary mb-2">
                                {workouts
                                    .filter(w => weekDays.some(d => d.toDateString() === new Date(w.date).toDateString()))
                                    .reduce((acc, w) => acc + w.sets.length, 0)}
                            </div>
                            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                                Total Sets Finished
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">

                        </span>
                        <div>
                            <div className="text-6xl font-headline font-bold text-secondary mb-2">
                                {(() => {
                                    const diasEntrenados = weekDays.filter(d => getWorkoutForDay(d)).length;
                                    return Math.round((diasEntrenados / 7) * 100) + '%';
                                })()}
                            </div>
                            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                                Weekly Goal Reach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
