// src/app/nutricion/page.tsx

const macros = [
    { label: 'Proteína', actual: 98, meta: 150, color: '#4f8ef7' },
    { label: 'Carbos', actual: 210, meta: 300, color: '#a855f7' },
    { label: 'Grasas', actual: 55, meta: 80, color: '#f75f4f' },
]

const comidas = [
    {
        id: '1',
        nombre: 'Desayuno',
        hora: '8:00 AM',
        alimentos: [
            { nombre: 'Avena', cantidad: '80g', calorias: 300 },
            { nombre: 'Plátano', cantidad: '1 pieza', calorias: 120 },
        ]
    },
    {
        id: '2',
        nombre: 'Almuerzo',
        hora: '2:00 PM',
        alimentos: [
            { nombre: 'Arroz', cantidad: '150g', calorias: 200 },
            { nombre: 'Pechuga de pollo', cantidad: '200g', calorias: 330 },
            { nombre: 'Ensalada', cantidad: '1 plato', calorias: 50 },
        ]
    },
    {
        id: '3',
        nombre: 'Cena',
        hora: '8:00 PM',
        alimentos: [
            { nombre: 'Huevos revueltos', cantidad: '3 piezas', calorias: 210 },
            { nombre: 'Tostadas integrales', cantidad: '2 piezas', calorias: 130 },
        ]
    },
]

export default function NutricionPage() {
    return (
        <main className="page">

            {/* Header */}
            <div className="page__header">
                <div>
                    <span className="page__tag">Módulo</span>
                    <h1 className="page__title">Nutrición</h1>
                </div>
                <button className="btn btn--primary">+ Añadir alimento</button>
            </div>

            {/* Resumen del día */}
            <section className="section">
                <h2 className="section__title">Resumen de hoy</h2>
                <div className="nutricion-resumen">

                    {/* Calorías */}
                    <div className="cal-card">
                        <p className="cal-card__label">Calorías consumidas</p>
                        <div className="cal-card__valores">
                            <span className="cal-card__actual">1,840</span>
                            <span className="cal-card__meta">/ 2,400 kcal</span>
                        </div>
                        <div className="cal-bar">
                            <div className="cal-bar__fill" style={{ width: '76%' }} />
                        </div>
                        <p className="cal-card__restante">560 kcal restantes</p>
                    </div>

                    {/* Macros */}
                    <div className="macros-grid">
                        {macros.map(macro => (
                            <div key={macro.label} className="macro-card">
                                <p className="macro-card__label">{macro.label}</p>
                                <p className="macro-card__valor">
                                    {macro.actual}g <span>/ {macro.meta}g</span>
                                </p>
                                <div className="macro-bar">
                                    <div
                                        className="macro-bar__fill"
                                        style={{
                                            width: `${(macro.actual / macro.meta) * 100}%`,
                                            background: macro.color
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Comidas */}
            <section className="section">
                <h2 className="section__title">Comidas del día</h2>
                <div className="comidas-lista">
                    {comidas.map(comida => (
                        <div key={comida.id} className="comida-card">
                            <div className="comida-card__header">
                                <div>
                                    <h3 className="comida-card__nombre">{comida.nombre}</h3>
                                    <span className="comida-card__hora">{comida.hora}</span>
                                </div>
                                <div className="comida-card__total">
                                    {comida.alimentos.reduce((acc, a) => acc + a.calorias, 0)} kcal
                                </div>
                            </div>
                            <ul className="alimentos-lista">
                                {comida.alimentos.map((alimento, i) => (
                                    <li key={i} className="alimento-item">
                                        <div>
                                            <span className="alimento-item__nombre">{alimento.nombre}</span>
                                            <span className="alimento-item__cantidad">{alimento.cantidad}</span>
                                        </div>
                                        <span className="alimento-item__cal">{alimento.calorias} kcal</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn--secondary">+ Añadir alimento</button>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}