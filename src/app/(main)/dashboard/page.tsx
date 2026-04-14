import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export default async function DashboardPage() {
  const session = await auth()
  const userId = session?.user?.id

  const workouts = await prisma.workoutLog.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
    take: 5,
    include: {
      routine: true,
      sets: { include: { exercise: true } }
    }
  })

  return (
    <div className="min-h-screen bg-surface px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full ml-auto mr-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-on-surface font-headline mb-2">
              PERFORMANCE
            </h1>
            <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">
              Daily Summary • {new Date().toLocaleDateString('es-MX', {
                month: 'short', day: 'numeric', year: 'numeric'
              })}
            </p>
          </div>

          {/* Streak */}
          <div className="bg-surface-container p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-tertiary">
            <div className="bg-tertiary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-tertiary text-3xl">
                local_fire_department
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">
                Current Streak
              </p>
              <p className="text-2xl font-black text-on-surface font-headline leading-none">
                7 Days
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Calorie Ring */}
          <div className="lg:col-span-7 bg-surface-container rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-square">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-surface-variant"
                    cx="50%" cy="50%"
                    fill="transparent"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50%" cy="50%"
                    fill="transparent"
                    r="45%"
                    stroke="url(#blueGradient)"
                    strokeDasharray="800"
                    strokeDashoffset="240"
                    strokeLinecap="square"
                    strokeWidth="14"
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#83aeff" />
                      <stop offset="100%" stopColor="#6ba0ff" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl sm:text-7xl font-black text-on-surface font-headline leading-none">
                    742
                  </span>
                  <span className="text-on-surface-variant font-label text-xs uppercase tracking-[0.2em] mt-2">
                    Calories Left
                  </span>
                </div>
              </div>

              {/* Macros */}
              <div className="grid grid-cols-1 gap-4 mt-10 w-full sm:grid-cols-3">
                <div className="text-center">
                  <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-primary w-[75%]" />
                  </div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider">Protein</p>
                  <p className="text-sm font-black text-on-surface font-headline">142/180g</p>
                </div>
                <div className="text-center">
                  <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-tertiary w-[45%]" />
                  </div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider">Carbs</p>
                  <p className="text-sm font-black text-on-surface font-headline">120/250g</p>
                </div>
                <div className="text-center">
                  <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-secondary-dim w-[60%]" />
                  </div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider">Fats</p>
                  <p className="text-sm font-black text-on-surface font-headline">45/75g</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Nutrition */}
          <div className="lg:col-span-5 bg-surface-container rounded-xl p-6 flex flex-col">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-6 flex items-center justify-between">
              Daily Nutrition
              <span className="material-symbols-outlined text-primary text-sm">more_horiz</span>
            </h3>

            <div className="space-y-4 flex-1">
              {/* Breakfast */}
              <div className="p-4 bg-surface-container-high rounded-xl flex items-center justify-between hover:bg-surface-bright transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">wb_twilight</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Breakfast</p>
                    <p className="text-xs text-on-surface-variant">Greek Yogurt & Berries</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-on-surface font-headline">420</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label">Kcal</p>
                </div>
              </div>

              {/* Lunch */}
              <div className="p-4 bg-surface-container-high rounded-xl flex items-center justify-between hover:bg-surface-bright transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">light_mode</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Lunch</p>
                    <p className="text-xs text-on-surface-variant">Chicken Quinoa Bowl</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-on-surface font-headline">650</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label">Kcal</p>
                </div>
              </div>

              {/* Dinner — pending */}
              <div className="p-4 bg-surface-container-low border border-dashed border-outline-variant/30 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant/50 flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">dark_mode</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant">Dinner</p>
                    <p className="text-xs text-on-surface-variant">Pending Entry</p>
                  </div>
                </div>
                <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest">
                Total Consumed
              </p>
              <p className="text-xl font-black text-on-surface font-headline">
                1,070 <span className="text-xs font-normal font-label text-on-surface-variant">KCAL</span>
              </p>
            </div>
          </div>

          {/* Recent Workouts */}
          <div className="col-span-8 bg-surface-container rounded-xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline font-bold text-lg text-on-surface">
                Recent Workouts
              </h3>
              <a href="/entrenamiento" className="text-primary text-xs font-label font-bold uppercase tracking-widest hover:underline">
                View All
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest border-b border-white/5">
                    <th className="pb-4 font-medium">Activity</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium">Series</th>
                    <th className="pb-4 font-medium">Intensity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {workouts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-on-surface-variant text-sm font-label">
                        No hay entrenamientos registrados aún.
                      </td>
                    </tr>
                  ) : (
                    workouts.map(workout => (
                      <tr key={workout.id}>
                        <td className="py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              <span className="material-symbols-outlined">fitness_center</span>
                            </div>
                            <span className="text-sm font-bold text-on-surface">
                              {workout.routine?.name ?? 'Sin rutina'}
                            </span>
                          </div>
                        </td>
                        <td className="py-5 text-sm text-on-surface-variant">
                          {new Date(workout.date).toLocaleDateString('es-MX')}
                        </td>
                        <td className="py-5 text-sm text-on-surface">
                          {workout.sets.length} series
                        </td>
                        <td className="py-5">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md font-label">
                            Normal
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-4 space-y-6">

            {/* Recovery Score */}
            <div className="bg-surface-container rounded-xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                  Recovery Score
                </span>
                <span className="material-symbols-outlined text-tertiary">bedtime</span>
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-6xl font-black text-on-surface font-headline leading-none">88</span>
                <span className="text-tertiary font-bold text-sm mb-1 uppercase tracking-tighter">Prime</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                Tu cuerpo está recuperado y listo para entrenamiento de alta intensidad. Sleep: 92%.
              </p>
              <div className="h-1 bg-surface-variant rounded-full w-full">
                <div className="h-full bg-tertiary w-[88%]" />
              </div>
            </div>

            {/* Quick Action CTA */}
            <div className="bg-primary rounded-xl p-6 flex flex-col justify-between h-48 relative overflow-hidden">
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/10 rotate-12">
                trending_up
              </span>
              <h4 className="text-on-primary font-headline font-black text-2xl leading-tight">
                Registra tu<br />entrenamiento
              </h4>
              
                <a href="/entrenamiento"
                className="mt-auto w-fit px-6 py-2 bg-on-primary text-primary font-bold text-sm rounded-full active:scale-95 transition-all">
                Ir a Workouts
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}