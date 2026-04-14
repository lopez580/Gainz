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
    <main className="min-h-screen w-full bg-[#0e0e13] px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-white/5 bg-[#111118] p-8 sm:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]">
        <header className="mb-10 space-y-3 text-center">
          <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'Space Grotesk' }}>GAINZ</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium" style={{ fontFamily: 'Manrope' }}>
            Elite Performance Tracking
          </p>
        </header>

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
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold" style={{ fontFamily: 'Manrope' }}>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-[#1f1f26] border-none rounded-xl h-14 px-5 text-white placeholder:text-gray-600 transition-all duration-200 hover:bg-[#2c2b33] focus:bg-[#2c2b33] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl text-white font-black text-lg tracking-tight active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/20"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            SIGN IN
          </button>
        </form>

        <footer className="mt-8 text-center">
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Manrope' }}>
            Do not have an account?
            <a href="/register" className="text-blue-400 font-bold hover:underline ml-1">Create an Account</a>
          </p>
        </footer>
      </div>
    </main>
  )
}