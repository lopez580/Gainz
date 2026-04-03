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
        <main>
            <form onSubmit={handleSubmit}>
                <h1> Gainz - Iniciar Sesion </h1>
                <input name="email" type="email" placeholder="Correo electronico" required />
                <input name="password" type="password" placeholder="Contraseña" required />
                <button type="submit">Iniciar sesión</button>
                <a href="/register">¿No tienes cuenta? Regístrate</a>
            </form>
        </main>
    )
}