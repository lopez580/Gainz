# Gainz 

Aplicación web full-stack de fitness inspirada en aplicaciones como MyFitnessPal y Fitia desarrollada como proyecto de portfolio.

## ¿Qué es Gainz?

Gainz es una app para llevar el control de tu progreso en el gym y tu nutrición diaria. Permite registrar entrenamientos, rutinas, conteo de calorías y visualizar tu progreso a lo largo del tiempo.

## Funcionalidades

- Autenticación con login y registro (NextAuth v5)
- Registro de entrenamientos y rutinas diarias
- Conteo de calorías y macronutrientes
- Dashboard con resumen diario de progreso
- Visualización de datos (en desarrollo)

## Stack tecnológico

- **Frontend:** Next.js 15 (App Router), TypeScript, CSS
- **Backend:** API Routes de Next.js
- **Base de datos:** MySQL con Prisma ORM v7
- **Autenticación:** NextAuth v5
- **Deploy:** Vercel (próximamente)

## Estado del proyecto

En desarrollo activo — proyecto personal de portfolio.

## Instalación local

```bash
git clone https://github.com/tu-usuario/gainz.git
cd gainz
npm install
```

Configura las variables de entorno en `.env`:

```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/gainz_db"
AUTH_SECRET="tu-secret"
```

```bash
npx prisma migrate dev
npx prisma db seed
npm run dev
```
