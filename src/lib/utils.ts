export function calcularStreak(workouts: { date: Date }[]): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  let streak = 0
  let currentDate = new Date(today)

  for (let i = 0; i < 30; i++) {
    const hasWorkout = workouts.some(w => {
      const workoutDate = new Date(w.date)
      workoutDate.setHours(0, 0, 0, 0)
      return workoutDate.getTime() === currentDate.getTime()
    })

    if (hasWorkout) {
      streak++
      currentDate.setDate(currentDate.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}