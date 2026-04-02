'use client'

export default function RegisterPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            })
        })

        // Después de registrarse, redirige al login
        window.location.href = '/login'
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1> Gainz - Registrarse </h1>
                <input name="name" type='text' placeholder='Nombre' required />
                <input name="email" type="email" placeholder="Correo electronico" required />
                <input name="password" type="password" placeholder="Contraseña" required />
                <button type="submit">Registrarse</button>
                <a href="/login">¿Ya tienes cuenta? Inicia sesion</a>
            </form>

        </main>
    )

}