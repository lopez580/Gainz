'use client'
import AddFood from '@/components/AddFood'
import { useState } from 'react'
const macros = [
    { label: 'Proteína', actual: 98, meta: 150, color: '#4f8ef7' },
    { label: 'Carbos', actual: 210, meta: 300, color: '#a855f7' },
    { label: 'Grasas', actual: 55, meta: 80, color: '#f75f4f' },
]

const comidas = [
    {
        id: '1',
        nombre: 'Desayuno',
        hora: '8:00 AM',
        alimentos: [
            { nombre: 'Avena', cantidad: '80g', calorias: 300 },
            { nombre: 'Plátano', cantidad: '1 pieza', calorias: 120 },
        ]
    },
    {
        id: '2',
        nombre: 'Almuerzo',
        hora: '2:00 PM',
        alimentos: [
            { nombre: 'Arroz', cantidad: '150g', calorias: 200 },
            { nombre: 'Pechuga de pollo', cantidad: '200g', calorias: 330 },
            { nombre: 'Ensalada', cantidad: '1 plato', calorias: 50 },
        ]
    },
    {
        id: '3',
        nombre: 'Cena',
        hora: '8:00 PM',
        alimentos: [
            { nombre: 'Huevos revueltos', cantidad: '3 piezas', calorias: 210 },
            { nombre: 'Tostadas integrales', cantidad: '2 piezas', calorias: 130 },
        ]
    },
]

export default function NutricionPage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <main className="pt-24 pb-16 px-6 xl:px-10 2xl:px-16 w-full px-6 xl:px-10 2xl:px-16 min-h-screen">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <span className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-2 block">Fuel Your Performance</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white">Nutrition</h1>
                </div>
                <button onClick={() => setIsOpen(true)} 
                className="kinetic-monolith-gradient text-on-primary font-label font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform cubic-bezier(0.4, 0, 0.2, 1)">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                    ADD FOOD
                </button>
                
            </header>
            <AddFood isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {/* Bento Grid Main Content */}
            <div className="grid grid grid-cols-1 lg:grid-cols-12 2xl:grid-cols-16 gap-8 xl:gap-6 xl:p-8 2xl:p-10

 gap-8">
                {/* Left Column: Summary & Macros (Static Instruments) */}
                <div className="lg:col-span-5 2xl:col-span-6 space-y-8">
                    {/* Calories Summary Card */}
                    <section className="bg-surface-container rounded-xl p-6 xl:p-8 2xl:p-10
 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="material-symbols-outlined text-8xl">bolt</span>
                        </div>
                        <h3 className="font-label text-on-surface-variant text-sm tracking-widest uppercase mb-8">Daily Energy Intake</h3>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="relative flex items-center justify-center">
                                {/* Circular Progress Simulation */}
                                <svg className="w-64 h-64 transform -rotate-90">
                                    <circle className="text-surface-variant" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
                                    <circle className="text-primary" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" stroke-dasharray="691" stroke-dashoffset="160" strokeWidth="14"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="font-headline text-6xl font-bold text-white leading-none">1,840</span>
                                    <span className="font-label text-on-surface-variant text-lg mt-2">/ 2,400 kcal</span>
                                </div>
                            </div>
                            <p className="font-body text-on-surface-variant text-sm pt-4">560 kcal remaining to hit your target</p>
                        </div>
                    </section>
                    {/* Macros Section */}
                    <section className="bg-surface-container rounded-xl p-6 xl:p-8 2xl:p-10
">
                        <h3 className="font-label text-on-surface-variant text-sm tracking-widest uppercase mb-8">Macro Breakdown</h3>
                        <div className="space-y-8">
                            {/* Protein */}
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <div>
                                        <span className="font-headline text-2xl font-bold text-white">142g</span>
                                        <span className="font-label text-xs text-on-surface-variant ml-2 uppercase">Protein</span>
                                    </div>
                                    <span className="font-label text-xs text-on-surface-variant">Goal: 180g</span>
                                </div>
                                <div className="h-3 w-full bg-surface-variant rounded-none overflow-hidden">
                                    <div className="h-full kinetic-monolith-gradient w-[78%]"></div>
                                </div>
                            </div>
                            {/* Carbs */}
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <div>
                                        <span className="font-headline text-2xl font-bold text-white">210g</span>
                                        <span className="font-label text-xs text-on-surface-variant ml-2 uppercase">Carbs</span>
                                    </div>
                                    <span className="font-label text-xs text-on-surface-variant">Goal: 250g</span>
                                </div>
                                <div className="h-3 w-full bg-surface-variant rounded-none overflow-hidden">
                                    <div className="h-full bg-tertiary w-[84%]"></div>
                                </div>
                            </div>
                            {/* Fats */}
                            <div>
                                <div className="flex justify-between items-end mb-3">
                                    <div>
                                        <span className="font-headline text-2xl font-bold text-white">52g</span>
                                        <span className="font-label text-xs text-on-surface-variant ml-2 uppercase">Fats</span>
                                    </div>
                                    <span className="font-label text-xs text-on-surface-variant">Goal: 65g</span>
                                </div>
                                <div className="h-3 w-full bg-surface-variant rounded-none overflow-hidden">
                                    <div className="h-full bg-secondary w-[80%]"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Right Column: Meals Section (High-Performance List) */}
                <div className="lg:col-span-7 2xl:col-span-10 space-y-6">
                    {/* Breakfast Card */}
                    <div className="group bg-surface rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container">
                        <div className="p-8 border-l-4 border-primary bg-surface-container-low">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-headline text-3xl font-bold text-white tracking-tight">Breakfast</h4>
                                    <p className="font-label text-on-surface-variant text-xs uppercase tracking-widest mt-1">Logged at 07:45 AM • 540 kcal</p>
                                </div>
                                <button  onClick={() => setIsOpen(true)} className="p-3 rounded-lg bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-dim">egg</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Scrambled Eggs (Large)</p>
                                        <p className="font-label text-xs text-on-surface-variant">3 units • 210 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-dim">bakery_dining</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Whole Grain Toast</p>
                                        <p className="font-label text-xs text-on-surface-variant">2 slices • 160 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary-dim">coffee</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Avocado</p>
                                        <p className="font-label text-xs text-on-surface-variant">100g • 170 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Lunch Card */}
                    <div className="group bg-surface rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container">
                        <div className="p-8 border-l-4 border-tertiary bg-surface-container-low">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-headline text-3xl font-bold text-white tracking-tight">Lunch</h4>
                                    <p className="font-label text-on-surface-variant text-xs uppercase tracking-widest mt-1">Logged at 01:15 PM • 720 kcal</p>
                                </div>
                                <button onClick={() => setIsOpen(true)} className="p-3 rounded-lg bg-surface-container-highest text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-tertiary">restaurant</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Grilled Chicken Breast</p>
                                        <p className="font-label text-xs text-on-surface-variant">200g • 330 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-tertiary">grain</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Brown Rice</p>
                                        <p className="font-label text-xs text-on-surface-variant">150g • 210 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Dinner Card (Empty State Placeholder Style) */}
                    <div className="group bg-surface-container-low border border-dashed border-outline-variant/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50">
                        <div className="p-8">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-headline text-3xl font-bold text-white/50 tracking-tight">Dinner</h4>
                                    <p className="font-label text-on-surface-variant/50 text-xs uppercase tracking-widest mt-1">Not logged yet</p>
                                </div>
                                <button  onClick={() => setIsOpen(true)} className="p-3 rounded-lg bg-surface-container-highest text-primary hover:bg-primary hover:text-on-primary transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Snacks Card */}
                    <div className="group bg-surface rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container">
                        <div className="p-8 border-l-4 border-secondary bg-surface-container-low">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-headline text-3xl font-bold text-white tracking-tight">Snacks</h4>
                                    <p className="font-label text-on-surface-variant text-xs uppercase tracking-widest mt-1">Logged throughout day • 580 kcal</p>
                                </div>
                                <button  onClick={() => setIsOpen(true)} className="p-3 rounded-lg bg-surface-container-highest text-secondary hover:bg-secondary hover:text-on-secondary transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">fitness_center</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Whey Protein Shake</p>
                                        <p className="font-label text-xs text-on-surface-variant">1 scoop (35g) • 140 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between group/item">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">nutrition</span>
                                    </div>
                                    <div>
                                        <p className="font-body font-semibold text-white">Mixed Nuts</p>
                                        <p className="font-label text-xs text-on-surface-variant">50g • 440 kcal</p>
                                    </div>
                                </div>
                                <button className="opacity-0 group-hover/item:opacity-100 text-on-surface-variant hover:text-error transition-opacity">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}