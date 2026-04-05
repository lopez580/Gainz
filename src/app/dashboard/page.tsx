
import { auth } from "@/auth"
import { BicepsFlexed, Flame, Scale, Ham } from 'lucide-react'
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

    //console.log(workouts)
    return (
        <main className="dashboard">
            <header className="dashboard__header">
                <div className="dashboard__greeting">
                    <span className="dashboard__tag">Bienvenido de vuelta</span>
                    <h1 className="dashboard__title">Tu progreso, <span className="gradient-text">hoy</span></h1>
                </div>
                <div className="dashboard__date">
                    {new Date().toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}
                </div>
            </header>

            <section className="stats-grid">
                <div className="stat-card stat-card--primary">
                    <span className="stat-card__icon"><Scale size={40} /></span>
                    <p className="stat-card__label">Calorías hoy</p>
                    <h2 className="stat-card__value">1,840</h2>
                    <p className="stat-card__sub">Meta: 2,400 kcal</p>
                </div>
                <div className="stat-card">
                    <span className="stat-card__icon"><BicepsFlexed size={40} /></span>
                    <p className="stat-card__label">Entrenamientos</p>
                    <h2 className="stat-card__value">{workouts.length}</h2>
                    <p className="stat-card__sub">Esta semana</p>
                </div>
                <div className="stat-card">
                    <span className="stat-card__icon"><Ham size={40} /></span>
                    <p className="stat-card__label">Proteína</p>
                    <h2 className="stat-card__value">98g</h2>
                    <p className="stat-card__sub">Meta: 150g</p>
                </div>
                <div className="stat-card">
                    <span className="stat-card__icon"><Flame color="red" size={40} /></span>
                    <p className="stat-card__label">Racha actual</p>
                    <h2 className="stat-card__value">7</h2>
                    <p className="stat-card__sub">días seguidos</p>
                </div>
            </section>

            <section className="dashboard__sections">
                <div className="panel">
                    <div className="panel__header">
                        <h3 className="panel__title">Rutina de hoy</h3>
                        <a href="/entrenamientos" className="panel__link">Ver todo →</a>
                    </div>
                    <div className="routine-preview">
                        <div className="routine-preview__badge">
                            {workouts[0]?.routine?.name ?? 'sin rutina'}
                        </div>
                        <ul className="exercise-list">
                            {workouts[0]?.sets?.map((set, i) => (
                                <li key={i} className="exercise-item">
                                    <span className="exercise-item__name">{set.exercise.name}</span>
                                    <span className="exercise-item__detail">{set.reps} reps - {set.weight}kg</span>

                                </li>
                            )) ?? <li>No hay ejercicios registrados</li>}
                        </ul>
                        <button className="btn btn--primary">Registrar entrenamiento</button>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel__header">
                        <h3 className="panel__title">Comidas de hoy</h3>
                        <a href="/nutricion" className="panel__link">Ver todo →</a>
                    </div>
                    <ul className="meal-list">
                        <li className="meal-item">
                            <div>
                                <p className="meal-item__name">Desayuno</p>
                                <p className="meal-item__detail">Avena con plátano</p>
                            </div>
                            <span className="meal-item__cal">420 kcal</span>
                        </li>
                        <li className="meal-item">
                            <div>
                                <p className="meal-item__name">Almuerzo</p>
                                <p className="meal-item__detail">Arroz, pollo, ensalada</p>
                            </div>
                            <span className="meal-item__cal">680 kcal</span>
                        </li>
                        <li className="meal-item">
                            <div>
                                <p className="meal-item__name">Cena</p>
                                <p className="meal-item__detail">Huevos con tostadas</p>
                            </div>
                            <span className="meal-item__cal">340 kcal</span>
                        </li>
                    </ul>
                    <button className="btn btn--secondary">+ Añadir comida</button>
                </div>
            </section>
        </main>
    )
}