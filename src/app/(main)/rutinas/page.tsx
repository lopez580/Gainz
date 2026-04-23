import React from 'react'
import {auth} from "@/auth"
import {prisma} from "@/lib/prisma"

export default async function Rutinaspage() {
    const session = await auth()
    const userId = session?.user?.id
    const routines = await prisma.routine.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
    })
    return (
        <main className="max-w-7xl mx-auto px-6 pt-12 pb-32">
            {/* Page Header */}
            <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div className="space-y-2">
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">Manage Routines</h1>
                    <p className="text-on-surface-variant font-body text-lg max-w-xl">Curate your performance protocol. Add, modify, or evolve your training cycles.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <a className="group flex items-center justify-center gap-2 bg-surface-container-high px-6 py-4 rounded-xl text-primary font-label font-bold uppercase tracking-widest hover:bg-surface-bright transition-all active:scale-95" href="#">
                        <span className="material-symbols-outlined text-[20px]">library_books</span>
                        <span>Global Exercise Library</span>
                    </a>
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container px-8 py-4 rounded-xl text-on-primary font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(131,174,255,0.2)]">
                        <span className="material-symbols-outlined">add</span>
                        <span>Create New Routine</span>
                    </button>
                </div>
            </section>
            {/* Bento Grid of Routines */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {routines.map((routine, index) => (
          <div key={routine.id} className={`${index === 0 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden bg-surface-container rounded-xl flex flex-col justify-end p-6 min-h-[300px]`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-white uppercase mb-4">{routine.name}</h3>
              {routine.description && (
                <p className="text-on-surface-variant text-sm mb-4">{routine.description}</p>
              )}
              <div className="grid grid-cols-2 gap-2">
                <a href={`/rutinas/${routine.id}`} className="w-full flex items-center justify-center gap-2 py-3 bg-surface-container-high rounded-xl text-sm font-label uppercase font-bold hover:bg-surface-bright transition-colors">
                  <span className="material-symbols-outlined text-sm">edit</span> Edit
                </a>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-error-container/10 rounded-xl text-sm font-label uppercase font-bold text-error/80 hover:bg-error-container/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <div className="md:col-span-4 border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center p-8 group hover:border-primary/50 transition-all cursor-pointer">
          <a href="/rutinas/nueva" className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <span className="font-label font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">Add Routine</span>
          </a>
        </div>
      </section>
    </main>
    )
}
