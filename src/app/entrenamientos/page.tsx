// src/app/entrenamientos/page.tsx
import Link from 'next/link'

const rutinas = [
    { id: '1', nombre: 'Push Day', descripcion: 'Pecho, hombros y tríceps', ultima: 'Hace 2 días' },
    { id: '2', nombre: 'Pull Day', descripcion: 'Espalda y bíceps', ultima: 'Hace 4 días' },
    { id: '3', nombre: 'Leg Day', descripcion: 'Cuádriceps, isquios y glúteos', ultima: 'Hace 1 semana' },
]

const historial = [
    { id: '1', fecha: 'Hoy', rutina: 'Push Day', ejercicios: 5 },
    { id: '2', fecha: 'Lunes 29 Mar', rutina: 'Pull Day', ejercicios: 4 },
    { id: '3', fecha: 'Sábado 27 Mar', rutina: 'Leg Day', ejercicios: 6 },
]

export default function EntrenamientosPage() {
    return (
        <main className="page">

            {/* Header */}
            <div className="page__header">
                <div>
                    <span className="page__tag">Módulo</span>
                    <h1 className="page__title">Entrenamientos</h1>
                </div>
                <button className="btn btn--primary">+ Nueva rutina</button>
            </div>

            {/* Rutinas */}
            <section className="section">
                <h2 className="section__title">Mis rutinas</h2>
                <div className="cards-grid">
                    {rutinas.map(rutina => (
                        <div key={rutina.id} className="card">
                            <div className="card__top">
                                <h3 className="card__title">{rutina.nombre}</h3>
                                <span className="card__badge">Activa</span>
                            </div>
                            <p className="card__desc">{rutina.descripcion}</p>
                            <p className="card__meta">Última vez: {rutina.ultima}</p>
                            <button className="btn btn--primary card__btn">Registrar hoy</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Historial */}
            <section className="section">
                <h2 className="section__title">Historial</h2>
                <div className="historial">
                    {historial.map(entry => (
                        <div key={entry.id} className="historial__item">
                            <div className="historial__left">
                                <span className="historial__fecha">{entry.fecha}</span>
                                <span className="historial__rutina">{entry.rutina}</span>
                            </div>
                            <span className="historial__ejercicios">{entry.ejercicios} ejercicios</span>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}