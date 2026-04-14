// src/app/entrenamientos/page.tsx

export default function EntrenamientosPage() {
    return (
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-5xl font-bold font-headline tracking-tighter text-on-surface mb-2">Workouts</h1>
                    <p className="font-label text-on-surface-variant tracking-wider uppercase text-xs">Performance Editorial / 2024</p>
                </div>
                <button className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl font-headline font-bold text-on-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                    <span className="material-symbols-outlined">add_circle</span>
                    Log Workout
                </button>
            </div>

            {/* Weekly Navigation */}
            <div className="bg-surface-container-low rounded-xl mb-8 p-1">
                <div className="flex items-center justify-between p-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="font-headline font-bold text-xl tracking-tight">Apr 7 - Apr 13</span>
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Current Week</span>
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {/* Monday - Active */}
                <div className="flex flex-col h-full group">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Mon</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">07</span>
                    </div>
                    <div className="flex-1 min-h-[180px] bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3">
                            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="font-headline font-bold text-xl leading-tight mb-1">Push Day</h3>
                                <p className="font-label text-[11px] text-on-surface-variant tracking-wide">6 EXERCISES</p>
                            </div>
                            <div className="mt-4">
                                <div className="w-full bg-surface-container-highest h-1 mb-2">
                                    <div className="bg-primary h-full w-full"></div>
                                </div>
                                <span className="font-label text-[9px] text-primary uppercase font-bold">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tuesday - Active */}
                <div className="flex flex-col h-full group">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Tue</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">08</span>
                    </div>
                    <div className="flex-1 min-h-[180px] bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-3">
                            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="font-headline font-bold text-xl leading-tight mb-1">Legs</h3>
                                <p className="font-label text-[11px] text-on-surface-variant tracking-wide">5 EXERCISES</p>
                            </div>
                            <div className="mt-4">
                                <div className="w-full bg-surface-container-highest h-1 mb-2">
                                    <div className="bg-primary h-full w-full"></div>
                                </div>
                                <span className="font-label text-[9px] text-primary uppercase font-bold">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wednesday - Empty */}
                <div className="flex flex-col h-full">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Wed</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">09</span>
                    </div>
                    <button className="flex-1 min-h-[180px] bg-surface-container-low/30 rounded-xl p-5 border border-dashed border-outline-variant/20 hover:border-primary/30 flex flex-col items-center justify-center group transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl mb-2">add</span>
                        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">No workout logged</span>
                    </button>
                </div>

                {/* Thursday - Active */}
                <div className="flex flex-col h-full">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Thu</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">10</span>
                    </div>
                    <div className="flex-1 min-h-[180px] bg-surface-container rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-3">
                            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="font-headline font-bold text-xl leading-tight mb-1">Pull Day</h3>
                                <p className="font-label text-[11px] text-on-surface-variant tracking-wide">7 EXERCISES</p>
                            </div>
                            <div className="mt-4">
                                <div className="w-full bg-surface-container-highest h-1 mb-2">
                                    <div className="bg-primary h-full w-full"></div>
                                </div>
                                <span className="font-label text-[9px] text-primary uppercase font-bold">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Friday - Empty */}
                <div className="flex flex-col h-full">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Fri</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">11</span>
                    </div>
                    <button className="flex-1 min-h-[180px] bg-surface-container-low/30 rounded-xl p-5 border border-dashed border-outline-variant/20 hover:border-primary/30 flex flex-col items-center justify-center group transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl mb-2">add</span>
                        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">No workout logged</span>
                    </button>
                </div>

                {/* Saturday - Empty */}
                <div className="flex flex-col h-full">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Sat</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50 text-primary/80 font-bold">12</span>
                    </div>
                    <button className="flex-1 min-h-[180px] bg-surface-container-high rounded-xl p-5 border border-primary/20 flex flex-col items-center justify-center group transition-all ring-1 ring-primary/10">
                        <span className="material-symbols-outlined text-primary transition-colors text-3xl mb-2">fitness_center</span>
                        <span className="font-label text-[10px] text-primary uppercase tracking-tighter font-bold">Plan Saturday</span>
                    </button>
                </div>

                {/* Sunday - Empty */}
                <div className="flex flex-col h-full">
                    <div className="mb-3 px-2 flex justify-between items-center">
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Sun</span>
                        <span className="font-headline text-lg font-medium text-on-surface-variant opacity-50">13</span>
                    </div>
                    <button className="flex-1 min-h-[180px] bg-surface-container-low/30 rounded-xl p-5 border border-dashed border-outline-variant/20 hover:border-primary/30 flex flex-col items-center justify-center group transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl mb-2">add</span>
                        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-tighter">No workout logged</span>
                    </button>
                </div>
            </div>

            {/* Metric Editorial Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden relative min-h-[400px]">
                    <img
                        alt="Athletic performance"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                        data-alt="dramatic wide shot of a powerful athlete lifting weights in a dark urban gym with high contrast cinematic lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNoknAR3trX4VB8oI13bDFkLauM7b2TLCDAJzUnxHaw5Aja-YKfGfBVaZh-bil07TUiui1ZOD1dea0NtqNJ_74WhzsZt6_YWRkjL-KMWAP_WI6m90YZSs27JZAPxRjRFmv_d5Y4Sbu2jVe8Ti7V3oIIDnQBKS1OGm98rjz91GbR6dnqaLKTRlaURB0FVHc-L2Wpc4ENF4r1oLjlGYx68NTsGVW9sb5jpef46rOOp6pZK1Q10zga5-C-fxZh8ZDkQ7Xg_vpBhmL2-Xn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                    <div className="relative h-full p-10 flex flex-col justify-end">
                        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Focus of the week</span>
                        <h2 className="text-6xl font-headline font-black tracking-tighter mb-4 leading-none">PEAK<br/>HYPERTROPHY</h2>
                        <p className="max-w-md text-on-surface-variant font-body leading-relaxed">Pushing beyond local fatigue to stimulate systemic adaptation. Keep your rest periods under 90s for maximum hormonal response.</p>
                    </div>
                </div>
                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Volume</span>
                        <div>
                            <div className="text-6xl font-headline font-bold text-primary mb-2">42</div>
                            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Total Sets Finished</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Consistency</span>
                        <div>
                            <div className="text-6xl font-headline font-bold text-secondary mb-2">84%</div>
                            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Weekly Goal Reach</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}