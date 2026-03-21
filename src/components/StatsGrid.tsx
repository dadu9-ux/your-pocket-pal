interface StatsGridProps {
  currentWeek: number;
  completedWorkouts: number;
  totalWorkouts: number;
  currentWeight?: number;
  goalWeight?: number;
}

export default function StatsGrid({ currentWeek, completedWorkouts, totalWorkouts, currentWeight, goalWeight }: StatsGridProps) {
  const progressPercent = totalWorkouts > 0 ? Math.round((completedWorkouts / totalWorkouts) * 100) : 0;

  return (
    <div className="grid grid-cols-2 gap-3 px-4 -mt-0">
      <div className="bg-card rounded-lg p-3 shadow-card">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Current Week</p>
        <p className="text-2xl font-bold text-primary font-display">{currentWeek}</p>
      </div>
      <div className="bg-card rounded-lg p-3 shadow-card">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Workouts Done</p>
        <p className="text-2xl font-bold text-primary font-display">{completedWorkouts}/{totalWorkouts}</p>
      </div>
      {currentWeight && (
        <div className="bg-card rounded-lg p-3 shadow-card">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Current Weight</p>
          <p className="text-2xl font-bold text-primary font-display">{currentWeight} kg</p>
        </div>
      )}
      <div className="bg-card rounded-lg p-3 shadow-card">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Progress</p>
        <p className="text-2xl font-bold text-primary font-display">{progressPercent}%</p>
      </div>
    </div>
  );
}
