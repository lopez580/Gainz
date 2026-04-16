import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  const workouts = await prisma.workoutLog.findMany({
    where: { userId },
    orderBy: { date: "desc" },
    take: 5,
    include: {
      routine: true,
      sets: { include: { exercise: true } },
    },
  });

  return (
    <main className="p-6 md:p-10 xl:p-12 min-h-screen bg-surface">
  <div className="max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2000px] mx-auto">

        {/* Dashboard Header & Streak */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black tracking-tight text-on-surface mb-3">
              PERFORMANCE
            </h1>
            <p className="text-on-surface-variant font-label tracking-[0.3em] text-[10px] md:text-xs uppercase opacity-80">
              Daily Summary • Oct 24, 2024
            </p>
          </div>
          {/* Current Streak Widget */}
          <div className="bg-surface-container-high p-5 rounded-2xl flex items-center gap-5 border border-white/5 shadow-2xl min-w-60">
            <div className="bg-tertiary/10 p-3 rounded-xl">
              <span
                className="material-symbols-outlined text-tertiary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
            </div>
            <div>
              <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest leading-none mb-2">
                Current Streak
              </p>
              <p className="text-3xl font-headline font-black text-on-surface leading-none">
                15 Days
              </p>
            </div>
          </div>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-16 gap-8 xl:gap-10">

          {/* Central Feature: Calorie Ring (Optimized for space) */}
          <div className="md:col-span-12 lg:col-span-7 xl:col-span-8 2xl:col-span-10 bg-surface-container rounded-2xl p-8 md:p-10 xl:p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px]">

            <div className="absolute top-0 right-0 w-100 h-100 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0  w-100 h-100 bg-secondary/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-105 lg:h-105 xl:w-120 xl:h-120 2xl:w-130 2xl:h-130">

                {/* SVG Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-surface-variant"
                    cx="50%"
                    cy="50%"
                    fill="transparent"
                    r="45%"
                    stroke="currentColor"
                    stroke-width="10"
                  ></circle>
                  <circle
                    className="drop-shadow-[0_0_15px_rgba(131,174,255,0.4)] transition-all duration-1000 ease-out"
                    cx="50%"
                    cy="50%"
                    fill="transparent"
                    r="45%"
                    stroke="url(#blueGradient)"
                    stroke-dasharray="1000"
                    stroke-dashoffset="300"
                    stroke-linecap="round"
                    stroke-width="12"
                  ></circle>
                  <defs>
                    <linearGradient
                      id="blueGradient"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#83aeff"></stop>
                      <stop offset="100%" stop-color="#6ba0ff"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-headline font-black text-on-surface leading-none">

                    742
                  </span>
                  <span className="text-on-surface-variant font-label text-xs md:text-sm uppercase tracking-[0.3em] mt-4 opacity-70">
                    Calories Left
                  </span>
                </div>
              </div>
              {/* Mini Macro Bars (Expanded for wide screens) */}
              <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 w-full max-w-2xl px-4">
                <div className="text-center group/macro">
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-primary w-[75%] transition-all duration-500"></div>
                  </div>
                  <p className="text-[10px] md:text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">
                    Protein
                  </p>
                  <p className="text-sm md:text-lg font-headline font-bold text-on-surface">
                    142
                    <span className="text-xs text-on-surface-variant">
                      /180g
                    </span>
                  </p>
                </div>
                <div className="text-center group/macro">
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-tertiary w-[45%] transition-all duration-500"></div>
                  </div>
                  <p className="text-[10px] md:text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">
                    Carbs
                  </p>
                  <p className="text-sm md:text-lg font-headline font-bold text-on-surface">
                    120
                    <span className="text-xs text-on-surface-variant">
                      /250g
                    </span>
                  </p>
                </div>
                <div className="text-center group/macro">
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-secondary-dim w-[60%] transition-all duration-500"></div>
                  </div>
                  <p className="text-[10px] md:text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">
                    Fats
                  </p>
                  <p className="text-sm md:text-lg font-headline font-bold text-on-surface">
                    45
                    <span className="text-xs text-on-surface-variant">
                      /75g
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Daily Nutrition Breakdown (Expanded for space) */}
          <div className="md:col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-6 bg-surface-container rounded-2xl p-8 xl:p-10 flex flex-col">

            <h3 className="font-headline font-bold text-xl text-on-surface mb-8 flex items-center justify-between">
              Daily Nutrition
              <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-white/5 p-1 rounded-md transition-colors">
                more_horiz
              </span>
            </h3>
            <div className="space-y-5 flex-1">
              {/* Breakfast */}
              <div className="p-5 bg-surface-container-high rounded-2xl flex items-center justify-between group hover:bg-surface-bright transition-all duration-300 cursor-pointer border border-transparent hover:border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      wb_twilight
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-on-surface">
                      Breakfast
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Greek Yogurt &amp; Berries
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-headline font-black text-on-surface">
                    420
                  </p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest">
                    Kcal
                  </p>
                </div>
              </div>
              {/* Lunch */}
              <div className="p-5 bg-surface-container-high rounded-2xl flex items-center justify-between group hover:bg-surface-bright transition-all duration-300 cursor-pointer border border-transparent hover:border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      light_mode
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-on-surface">Lunch</p>
                    <p className="text-sm text-on-surface-variant">
                      Chicken Quinoa Bowl
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-headline font-black text-on-surface">
                    650
                  </p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest">
                    Kcal
                  </p>
                </div>
              </div>
              {/* Dinner */}
              <div className="p-5 bg-surface-container-low border-2 border-dashed border-outline-variant/20 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-surface-variant/30 flex items-center justify-center text-on-surface-variant/50">
                    <span className="material-symbols-outlined text-3xl">
                      dark_mode
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-on-surface-variant">
                      Dinner
                    </p>
                    <p className="text-sm text-on-surface-variant/60">
                      Pending Entry
                    </p>
                  </div>
                </div>
                <button className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 active:scale-90">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-on-surface-variant font-label tracking-widest mb-1">
                  TOTAL CONSUMED
                </p>
                <p className="text-3xl font-headline font-black text-on-surface">
                  1,070{" "}
                  <span className="text-sm font-label font-normal text-on-surface-variant uppercase tracking-widest">
                    Kcal
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-on-surface-variant font-label tracking-widest mb-1">
                  TARGET
                </p>
                <p className="text-xl font-headline font-bold text-on-surface-variant/60">
                  2,500
                </p>
              </div>
            </div>
          </div>
          {/* Recent Workouts (Wide screen table) */}
          <div className="md:col-span-12 lg:col-span-8 2xl:col-span-10 bg-surface-container rounded-2xl p-8 xl:p-10 overflow-hidden">

            <div className="flex items-center justify-between mb-10">
              <h3 className="font-headline font-bold text-xl text-on-surface">
                Recent Workouts
              </h3>
              <button className="text-primary text-xs font-label font-bold uppercase tracking-widest hover:bg-primary/5 px-4 py-2 rounded-lg transition-all border border-primary/20">
                View Analytics
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-150">
                <thead>
                  <tr className="text-[10px] md:text-xs text-on-surface-variant uppercase font-label tracking-[0.2em] border-b border-white/5">
                    <th className="pb-6 font-semibold">Activity</th>
                    <th className="pb-6 font-semibold">Date / Time</th>
                    <th className="pb-6 font-semibold">Duration</th>
                    <th className="pb-6 font-semibold">Intensity</th>
                    <th className="pb-6 text-right font-semibold">Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group hover:bg-white/2 transition-colors">
                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                          <span className="material-symbols-outlined">
                            fitness_center
                          </span>
                        </div>
                        <div>
                          <p className="text-base font-bold text-on-surface">
                            Upper Body Power
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            Hypertrophy Phase
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6">
                      <p className="text-sm text-on-surface">Today</p>
                      <p className="text-xs text-on-surface-variant">
                        08:30 AM
                      </p>
                    </td>
                    <td className="py-6 text-sm text-on-surface font-medium">
                      65 min
                    </td>
                    <td className="py-6">
                      <span className="px-3 py-1 bg-error-container/20 text-error-dim text-[10px] font-bold uppercase rounded-lg tracking-widest border border-error-container/30">
                        High
                      </span>
                    </td>
                    <td className="py-6 text-right font-headline font-black text-on-surface text-lg">
                      540{" "}
                      <span className="text-[10px] font-normal text-on-surface-variant uppercase tracking-widest">
                        kcal
                      </span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/2 transition-colors">
                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                          <span className="material-symbols-outlined">
                            directions_run
                          </span>
                        </div>
                        <div>
                          <p className="text-base font-bold text-on-surface">
                            Zone 2 Recovery
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            Cardio Health
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6">
                      <p className="text-sm text-on-surface">Yesterday</p>
                      <p className="text-xs text-on-surface-variant">
                        06:15 PM
                      </p>
                    </td>
                    <td className="py-6 text-sm text-on-surface font-medium">
                      45 min
                    </td>
                    <td className="py-6">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-lg tracking-widest border border-primary/20">
                        Moderate
                      </span>
                    </td>
                    <td className="py-6 text-right font-headline font-black text-on-surface text-lg">
                      320{" "}
                      <span className="text-[10px] font-normal text-on-surface-variant uppercase tracking-widest">
                        kcal
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Recovery & CTA Sidebars */}
          <div className="md:col-span-12 lg:col-span-4 2xl:col-span-6 space-y-16">

            {/* Recovery Score */}
            <div className="  b-linear-to-br from-surface-container to-surface-container-high rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-500"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-label text-on-surface-variant uppercase tracking-[0.2em] font-bold">
                  Recovery Score
                </span>
                <div className="bg-tertiary/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary text-xl">
                    bedtime
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-7xl lg:text-8xl font-headline font-black text-on-surface leading-none">
                  88
                </span>
                <div className="mb-2">
                  <span className="text-tertiary font-black text-sm uppercase tracking-widest block">
                    PRIME
                  </span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    Ready to push
                  </span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8 opacity-80">
                Your body is fully recovered and ready for high-intensity
                training today. Sleep quality peaked at 92% during REM cycles.
              </p>
              <div className="h-1.5 bg-surface-variant rounded-full w-full overflow-hidden">
                <div className="h-full bg-tertiary w-[88%] shadow-[0_0_15px_rgba(250,180,255,0.6)]"></div>
              </div>
            </div>
            {/* Action Card */}
            <div className="bg-primary rounded-2xl p-12 flex flex-col justify-between min-h-55 xl:min-h-65
 relative overflow-hidden group shadow-2xl shadow-primary/10">
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[200px] text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
                trending_up
              </span>
              <div className="relative z-10 mb-6">
                <h4 className="text-on-primary font-headline font-black text-3xl lg:text-4xl leading-[1.1] mb-4">
                  Crush your <br />
                  Weekly PR
                </h4>
                <p className="text-on-primary/70 text-sm max-w-50">
                  You're currently trending 12% above last week's volume.
                </p>
              </div>
              <button className="relative z-10 mt-auto w-full md:w-fit px-8 py-3 bg-on-primary text-primary font-bold text-sm rounded-xl active:scale-95 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 uppercase tracking-widest">
                View Training Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
