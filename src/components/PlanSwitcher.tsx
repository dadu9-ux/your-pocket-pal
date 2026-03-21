import { WorkoutPlan } from '@/types/workout';
import { getTotalCompletedWorkouts } from '@/lib/storage';
import { cn } from '@/lib/utils';
import { Dumbbell, Trash2, Check } from 'lucide-react';

interface PlanSwitcherProps {
  plans: WorkoutPlan[];
  activePlanId: string;
  onSelect: (planId: string) => void;
  onDelete: (planId: string) => void;
  onCreateNew: () => void;
}

export default function PlanSwitcher({ plans, activePlanId, onSelect, onDelete, onCreateNew }: PlanSwitcherProps) {
  return (
    <div className="px-4 mt-4 space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-sm text-muted-foreground">Your Plans</h2>
        <button onClick={onCreateNew} className="text-primary text-xs font-semibold">+ New Plan</button>
      </div>
      {plans.map(plan => {
        const isActive = plan.id === activePlanId;
        const totalWorkouts = plan.totalWeeks * plan.daysPerWeek;
        const completed = getTotalCompletedWorkouts(plan.id, plan.totalWeeks);
        const isFinished = completed >= totalWorkouts;

        return (
          <div
            key={plan.id}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl transition-all',
              isActive ? 'bg-primary/10 ring-1 ring-primary/30' : 'bg-card'
            )}
          >
            <button onClick={() => onSelect(plan.id)} className="flex items-center gap-3 flex-1 text-left">
              <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', isActive ? 'gradient-intensive' : 'bg-secondary')}>
                {isFinished ? <Check className="w-4 h-4 text-primary-foreground" /> : <Dumbbell className="w-4 h-4 text-foreground" />}
              </div>
              <div>
                <p className="text-sm font-semibold">{plan.name}</p>
                <p className="text-[10px] text-muted-foreground">{completed}/{totalWorkouts} workouts • {plan.totalWeeks} weeks</p>
              </div>
            </button>
            {plans.length > 1 && (
              <button onClick={() => onDelete(plan.id)} className="p-2 text-muted-foreground">
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
