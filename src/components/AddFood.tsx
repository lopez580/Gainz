'use client'
interface AddFoodProps {
    isOpen: boolean
    onClose: () => void
}
export default function AddFood({ isOpen, onClose }: AddFoodProps) {
    if (!isOpen) return null
    return (
        <main className="w-full max-w-5xl bg-surface rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-outline-variant/10 flex flex-col md:flex-row h-[921px]">
            {/* Left Panel: Search & Controls */}
            <section className="flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-headline font-bold uppercase tracking-tight text-on-surface">Add Food</h1>
                    <button  className="p-2 hover:bg-surface-container-highest rounded-xl transition-all" onClick={onClose}>
                        <span className="material-symbols-outlined text-on-surface-variant">close</span>
                    </button>
                </div>
                {/* Search Input */}
                <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
                    <input className="w-full bg-surface-container-high border-none py-4 pl-12 pr-4 rounded-xl font-label text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search for food or scan barcode..." type="text" />
                </div>
                {/* Meal Selection */}
                <div className="grid grid-cols-4 gap-2">
                    <button className="flex flex-col items-center gap-2 p-3 bg-primary/10 border border-primary/20 rounded-xl transition-all">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>breakfast_dining</span>
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">Breakfast</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant">lunch_dining</span>
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lunch</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant">dinner_dining</span>
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Dinner</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-all">
                        <span className="material-symbols-outlined text-on-surface-variant">cookie</span>
                        <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Snacks</span>
                    </button>
                </div>
                {/* Frequency List (Bento-ish Layout) */}
                <div className="space-y-4">
                    <h3 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Frequently Logged</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {/* Item 1 */}
                        <div className="group flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container transition-all rounded-xl cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="Close up of a grilled chicken breast on a dark background with dramatic lighting and steam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE80JzvbZJCJJ5c_pvTGQWOMPY9KXV8pqhEbgMFmSSk_Vx2c2BCijFQZu4TiZhkhbII0T9jKeWujfV3MSp7KYlf_xRTZauQucNJSQiDxrYeyjmQ9ThvzGhSLR9g_9POd3wMtOn_oJjDmFqy7USIjpFAr-6y8SWK7T1oM-Fd2lHvtOOdBf9EEoQCRNDBirQxVcmgRbfLpy1yGzB01_NX83dx5iZjoPyYUtpQAE_xg_vHqrbRQafbFdNxb_iFvIoFPre7ZMg_Wr1i7On" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface">Grilled Chicken Breast</h4>
                                    <p className="text-xs text-on-surface-variant">100g • 165 kcal</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all">add_circle</span>
                        </div>
                        {/* Item 2 */}
                        <div className="group flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container transition-all rounded-xl cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="Bowl of creamy oatmeal with almond milk and fresh blueberries in atmospheric moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwNg0ukbmy9bJpx18aBvm1ZmorDZG7xPUdX5UFpDcKsgO_wOY4cBr7DxT1JiL_32F1J6ZRnq5Fa3MACrxRJvEAREgZUola5HUnW1j3aWo8izw5AQkmBvkJcjMjdwNjICD-WLumg3vj_piL_3d_gWG-ItW21HqLaFtVR-X7Gdrn53AlZOrqpO5u0UChGQmRilUE3TUTZBD_rfgmRKCZvfKt5FYCBg8QFWUpuHxopNMIKwPYiZFVoWWXRFvzc3y1fq2jvJqBen4-TAdX" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface">Organic Rolled Oats</h4>
                                    <p className="text-xs text-on-surface-variant">50g • 190 kcal</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all">add_circle</span>
                        </div>
                        {/* Item 3 */}
                        <div className="group flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container transition-all rounded-xl cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden">
                                    <img className="w-full h-full object-cover" data-alt="Single large organic avocado sliced in half on a dark slate board with rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9WETYUl9VDwuhZKZ8R90k0nyyo9K_-KRdAaj6SQkivH-9NFEdFGE-GhTDsST4MYv8hs8A2hibewtJ-_7k1jkrWa2Ormnew7BQ63eaEIr-zFbrp93mYHvMhOAB-JS_AnE_6te1MwmLTz58WZimX-K49D0kIrG33FfGjCHOEdsiCC8hB3L5gO7FUWVYZqTsCwt5OmXgYO8YIVLD3vEYdl6UUz-9uSCwHnBlFPXW6YHnhuYr8hPel4Xay1uLa42tNgVbK53_0dwB6V2" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface">Avocado (Hass)</h4>
                                    <p className="text-xs text-on-surface-variant">1 medium • 240 kcal</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all">add_circle</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Right Panel: Macro Cockpit & Submission */}
            <aside className="w-full md:w-[400px] bg-surface-container border-l border-outline-variant/10 p-8 flex flex-col justify-between">
                <div className="space-y-12">
                    {/* Quantity Input */}
                    <div className="space-y-6">
                        <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Adjust Amount</label>
                        <div className="flex gap-4">
                            <input className="flex-1 bg-surface-container-highest border-none py-6 text-3xl font-headline font-bold text-on-surface rounded-xl text-center focus:ring-primary-fixed/20 transition-all" type="number" value="150" />
                            <select className="w-1/3 bg-surface-container-high border-none rounded-xl font-label text-on-surface focus:ring-primary-fixed/20">
                                <option>Grams</option>
                                <option>Oz</option>
                                <option>Servings</option>
                            </select>
                        </div>
                    </div>
                    {/* Live Stats Visualizer */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <span className="text-[5rem] font-headline font-black leading-none text-on-surface">247</span>
                            <p className="font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">Calories</p>
                        </div>
                        {/* Macro Bars */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest font-label">
                                    <span className="text-on-surface">Protein</span>
                                    <span className="text-primary">42g</span>
                                </div>
                                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                    <div className="h-full kinetic-gradient w-[85%]"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest font-label">
                                    <span className="text-on-surface">Carbs</span>
                                    <span className="text-tertiary">12g</span>
                                </div>
                                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                    <div className="h-full bg-tertiary w-[25%]"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest font-label">
                                    <span className="text-on-surface">Fats</span>
                                    <span className="text-secondary">4.5g</span>
                                </div>
                                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary w-[15%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Action */}
                <div className="pt-8">
                    <button className="w-full kinetic-gradient py-6 rounded-xl text-on-primary-fixed font-headline font-bold text-lg uppercase tracking-widest active:scale-95 duration-150 shadow-[0_10px_30px_rgba(131,174,255,0.2)]">
                        Add to Journal
                    </button>
                    <p className="text-center mt-4 font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest">Saved to daily log</p>
                </div>
            </aside>
        </main>

        )
}