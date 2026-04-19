'use client'

interface LogWorkoutProps {
    isOpen: boolean
    onclose: () => void
}
export default function LogWorkout({ isOpen, onclose }: LogWorkoutProps) {
    if (!isOpen) return null
    return (
        <>
            <main className="pt-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                        <div className="h-64 bg-surface-container rounded-xl"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-40 bg-surface-container rounded-xl"></div>
                            <div className="h-40 bg-surface-container rounded-xl"></div>
                        </div>
                    </div>
                    <div className="h-[500px] bg-surface-container rounded-xl"></div>
                </div>
            </main>


            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-surface-container-lowest/80 backdrop-blur-md">
                {/* Log Workout Modal: Responsive Widths */}
                <div className="glass-panel w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-outline-variant/30 shadow-2xl flex flex-col transition-all duration-300">
                    {/* Modal Header & Tabs */}
                    <div className="p-6 md:p-8 pb-0 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-tight text-on-surface">Log Workout</h2>
                            <button  onClick={onclose} className="p-2 hover:bg-surface-container-highest rounded-full transition-colors group">
                                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface">close</span>
                            </button>
                        </div>
                        {/* Tabs */}
                        <div className="flex border-b border-outline-variant/30">
                            <button className="px-6 py-3 font-headline font-bold text-xs md:text-sm tracking-widest uppercase border-b-2 border-primary text-primary transition-all">
                                From Routine
                            </button>
                            <button className="px-6 py-3 font-headline font-medium text-xs md:text-sm tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-all">
                                Manual
                            </button>
                        </div>
                    </div>
                    {/* Modal Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                        {/* Routine Selector */}
                        <div className="space-y-3">
                            <label className="font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Select Routine</label>
                            <div className="relative max-w-lg">
                                <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-4 text-on-surface font-headline font-medium appearance-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                                    <option>Push Day - Hypertrophy Focus</option>
                                    <option>Pull Day - Back &amp; Bi</option>
                                    <option>Leg Day - Explosive Power</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                            </div>
                        </div>
                        {/* Exercise List */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-outline-variant/10 pb-2">
                                <h3 className="font-headline font-bold text-lg md:text-xl">Exercises</h3>
                                <span className="font-label text-xs text-primary-container font-bold bg-primary/10 px-3 py-1 rounded-full">4 Exercises Loaded</span>
                            </div>
                            {/* Exercise Card Grid: Responsive Columns for wider screens */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                                {/* Exercise Card: Bench Press */}
                                <div className="bg-surface-container-high/40 rounded-2xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h4 className="font-headline font-bold text-base md:text-lg text-on-surface">Barbell Bench Press</h4>
                                            <p className="font-label text-xs text-on-surface-variant">Chest / Triceps</p>
                                        </div>
                                        <button className="text-error/60 hover:text-error transition-colors p-1">
                                            <span className="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Sets</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="3" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Reps</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="10" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Weight</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="80" />
                                        </div>
                                    </div>
                                </div>
                                {/* Exercise Card: Incline Dumbbell Fly */}
                                <div className="bg-surface-container-high/40 rounded-2xl p-6 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h4 className="font-headline font-bold text-base md:text-lg text-on-surface">Incline Dumbbell Fly</h4>
                                            <p className="font-label text-xs text-on-surface-variant">Chest</p>
                                        </div>
                                        <button className="text-error/60 hover:text-error transition-colors p-1">
                                            <span className="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Sets</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="4" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Reps</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="12" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant block text-center">Weight</label>
                                            <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 text-center font-headline font-bold text-primary focus:ring-2 focus:ring-primary/50 text-lg" type="number" value="18" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-5 border-2 border-dashed border-outline-variant/30 rounded-2xl font-headline font-bold text-sm text-on-surface-variant hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined">add_circle</span>
                                Add Exercise
                            </button>
                        </div>
                        {/* Session Notes */}
                        <div className="space-y-3">
                            <label className="font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Session Notes</label>
                            <textarea className="w-full bg-surface-container-high border-none rounded-xl p-5 text-on-surface font-body text-base focus:ring-2 focus:ring-primary/50 resize-none placeholder:text-on-surface-variant/40 min-h-[120px]" placeholder="How did you feel? Any fatigue? Focus areas?"></textarea>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row gap-4">
                        <button  onClick={onclose} className="flex-1 py-4 md:py-5 font-headline font-bold text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-all">
                            Cancel
                        </button>
                        <button className="flex-[2] py-4 md:py-5 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-black tracking-wider uppercase rounded-xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all">
                            Save Workout
                        </button>
                    </div>
                </div>
            </div>
            </>


            )
}