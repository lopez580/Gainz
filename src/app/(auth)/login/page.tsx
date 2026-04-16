'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = form.email.value
    const password = form.password.value

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.ok) {
      window.location.href = '/dashboard'
    }
  }

  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden lg:rounded-xl bg-[#0e0e13] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] border border-white/5 mx-auto">
      
      {/* Brand Side */}
      <section className="relative w-full lg:w-1/2 h-75 lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-16">
          <div>
            <h1 className="text-3xl font-black italic tracking-tighter text-blue-400" style={{ fontFamily: 'Space Grotesk' }}>GAINZ</h1>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none text-white" style={{ fontFamily: 'Space Grotesk' }}>
              THE KINETIC<br />MONOLITH
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium" style={{ fontFamily: 'Manrope' }}>
              Elite Performance Tracking
            </p>
          </div>
        </div>
      </section>

      {/* Form Side */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#0e0e13] relative">
        <div className="w-full max-w-105 space-y-10">
          
          {/* Header */}
          <header className="space-y-2">
            <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>Welcome Back</h3>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Manrope' }}>Enter your credentials to access your performance cockpit.</p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold" style={{ fontFamily: 'Manrope' }}>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="name@performance.com"
                required
                className="w-full bg-[#1f1f26] border-none rounded-xl h-14 px-5 text-white placeholder:text-gray-600 transition-all duration-200 hover:bg-[#2c2b33] focus:bg-[#2c2b33] outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold" style={{ fontFamily: 'Manrope' }}>Password</label>
              </div>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full bg-[#1f1f26] border-none rounded-xl h-14 px-5 text-white placeholder:text-gray-600 transition-all duration-200 hover:bg-[#2c2b33] focus:bg-[#2c2b33] outline-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl text-white font-black text-lg tracking-tight active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/20"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                SIGN IN
              </button>
            </div>
          </form>

          {/* Footer */}
          <footer className="text-center pt-4">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Manrope' }}>
              Do not have an account?
              <a href="/register" className="text-blue-400 font-bold hover:underline ml-1">Create an Account</a>
            </p>
          </footer>

        </div>

        {/* Decorative */}
        <div className="absolute bottom-8 right-8 pointer-events-none">
          <p className="text-[80px] font-black text-white/[0.02] leading-none select-none" style={{ fontFamily: 'Space Grotesk' }}>V.04</p>
        </div>
      </section>

    </main>
  )
}