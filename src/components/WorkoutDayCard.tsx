import { useState } from 'react';
import { WorkoutDay, DayProgress, ExerciseProgress, SetCompletion } from '@/types/workout';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Dumbbell, Heart, Moon, Check } from 'lucide-react';
import ExerciseCard from './ExerciseCard';

interface WorkoutDayCardProps {
  day: WorkoutDay;
  dayProgress?: DayProgress;
  weekNumber: number;
  onToggleComplete: (day: string, completed: boolean) => void;
  onExerciseUpdate: (exerciseId: string, progress: ExerciseProgress) => void;
  onNotesChange: (day: string, notes: string) => void;
}

const typeConfig = {
  intensive: { icon: Dumbbell, className: 'gradient-intensive', label: 'INTENSIVE' },
  recovery: { icon: Heart, className: 'gradient-recovery', label: 'RECOVERY' },
  rest: { icon: Moon, className: 'gradient-rest', label: 'REST' },
};

export default function WorkoutDayCard({
  day, dayProgress, weekNumber, onToggleComplete, onExerciseUpdate, onNotesChange
}: WorkoutDayCardProps) {
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[day.type];
  const Icon = config.icon;
  const isCompleted = dayProgress?.completed || false;

  return (
    <div className={cn('bg-card rounded-xl shadow-card overflow-hidden animate-slide-in', isCompleted && 'ring-1 ring-primary/30')}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-4"
      >
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', config.className)}>
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-base">{day.day}</h3>
            <span className={cn('text-[9px] px-2 py-0.5 rounded-full font-semibold tracking-wider', config.className, 'text-primary-foreground')}>
              {config.label}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{day.title}</p>
        </div>
        {isCompleted && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
        {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          {/* Complete toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => onToggleComplete(day.day, e.target.checked)}
              className="w-4 h-4 rounded accent-primary"
            />
            <span className="text-sm">Mark as Completed</span>
          </label>

          {day.warmup && (
            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Warm-up</p>
              <p className="text-sm text-foreground/80 mt-1">{day.warmup}</p>
            </div>
          )}

          {day.format && (
            <div className="bg-primary/10 rounded-lg p-3">
              <p className="text-xs text-primary whitespace-pre-line">{day.format}</p>
            </div>
          )}

          {day.type === 'rest' && day.notes && (
            <p className="text-sm text-muted-foreground">{day.notes}</p>
          )}

          {day.exercises.map(exercise => {
            const exProgress = dayProgress?.exercises.find(e => e.exerciseId === exercise.id);
            return (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                progress={exProgress}
                onUpdate={(p) => onExerciseUpdate(exercise.id, p)}
              />
            );
          })}

          {day.optionB && (
            <div className="bg-secondary/30 rounded-lg p-3 border border-border">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Option B</p>
              <p className="text-xs text-foreground/70 whitespace-pre-line">{day.optionB}</p>
            </div>
          )}

          {day.cooldown && (
            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Cool-down</p>
              <p className="text-sm text-foreground/80 mt-1">{day.cooldown}</p>
            </div>
          )}

          {/* Notes */}
          <div>
            <textarea
              placeholder="Workout notes..."
              value={dayProgress?.workoutNotes || ''}
              onChange={(e) => onNotesChange(day.day, e.target.value)}
              className="w-full bg-secondary rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none h-20 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
}
