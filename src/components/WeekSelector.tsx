import { cn } from '@/lib/utils';

interface WeekSelectorProps {
  totalWeeks: number;
  currentWeek: number;
  onSelectWeek: (week: number) => void;
  getWeekCompletion: (week: number) => number;
}

export default function WeekSelector({ totalWeeks, currentWeek, onSelectWeek, getWeekCompletion }: WeekSelectorProps) {
  return (
    <div className="px-4 mt-4">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: totalWeeks }, (_, i) => i + 1).map(week => {
          const completion = getWeekCompletion(week);
          const isActive = week === currentWeek;
          return (
            <button
              key={week}
              onClick={() => onSelectWeek(week)}
              className={cn(
                'flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden',
                isActive
                  ? 'gradient-intensive text-primary-foreground shadow-glow'
                  : 'bg-secondary text-secondary-foreground'
              )}
            >
              <span className="relative z-10">W{week}</span>
              {completion > 0 && !isActive && (
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all"
                  style={{ width: `${(completion / 6) * 100}%` }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
