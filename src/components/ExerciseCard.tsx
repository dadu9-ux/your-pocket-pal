import { useState } from 'react';
import { Exercise, ExerciseProgress, SetCompletion } from '@/types/workout';
import { cn } from '@/lib/utils';
import { RefreshCw, Check } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  progress?: ExerciseProgress;
  onUpdate: (progress: ExerciseProgress) => void;
}

export default function ExerciseCard({ exercise, progress, onUpdate }: ExerciseCardProps) {
  const [showVariations, setShowVariations] = useState(false);
  const selectedVar = progress?.selectedVariation ?? -1;
  const currentExercise = selectedVar >= 0 ? exercise.variations[selectedVar] : exercise;
  const sets = progress?.sets || Array.from({ length: exercise.sets }, () => ({ completed: false }));

  function toggleSet(index: number) {
    const newSets = [...sets];
    newSets[index] = { ...newSets[index], completed: !newSets[index].completed };
    onUpdate({
      exerciseId: exercise.id,
      selectedVariation: selectedVar,
      sets: newSets,
      notes: progress?.notes,
    });
  }

  function selectVariation(varIdx: number) {
    onUpdate({
      exerciseId: exercise.id,
      selectedVariation: varIdx,
      sets: progress?.sets || Array.from({ length: exercise.sets }, () => ({ completed: false })),
      notes: progress?.notes,
    });
    setShowVariations(false);
  }

  function selectDefault() {
    onUpdate({
      exerciseId: exercise.id,
      selectedVariation: -1,
      sets: progress?.sets || Array.from({ length: exercise.sets }, () => ({ completed: false })),
      notes: progress?.notes,
    });
    setShowVariations(false);
  }

  return (
    <div className="bg-secondary/40 rounded-lg p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className="text-sm font-semibold">{currentExercise.name}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            {currentExercise.weight && `${currentExercise.weight}`}
            {currentExercise.duration && ` • ${currentExercise.duration}`}
            {currentExercise.reps && ` • ${currentExercise.reps}`}
            {currentExercise.notes && ` (${currentExercise.notes})`}
          </p>
        </div>
        {exercise.variations.length > 0 && (
          <button
            onClick={() => setShowVariations(!showVariations)}
            className="flex items-center gap-1 text-[10px] text-primary px-2 py-1 bg-primary/10 rounded-md"
          >
            <RefreshCw className="w-3 h-3" />
            Swap
          </button>
        )}
      </div>

      {/* Variation picker */}
      {showVariations && (
        <div className="mt-2 space-y-1 bg-background/50 rounded-lg p-2">
          <button
            onClick={selectDefault}
            className={cn(
              'w-full text-left text-xs px-2 py-1.5 rounded',
              selectedVar === -1 ? 'bg-primary/20 text-primary' : 'text-foreground/70'
            )}
          >
            {exercise.name} (default)
          </button>
          {exercise.variations.map((v, i) => (
            <button
              key={i}
              onClick={() => selectVariation(i)}
              className={cn(
                'w-full text-left text-xs px-2 py-1.5 rounded',
                selectedVar === i ? 'bg-primary/20 text-primary' : 'text-foreground/70'
              )}
            >
              {v.name}
              {v.weight && ` • ${v.weight}`}
            </button>
          ))}
        </div>
      )}

      {/* Sets */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {sets.map((set, i) => (
          <button
            key={i}
            onClick={() => toggleSet(i)}
            className={cn(
              'w-9 h-9 rounded-lg text-xs font-medium flex items-center justify-center transition-all',
              set.completed
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground border border-border'
            )}
          >
            {set.completed ? <Check className="w-4 h-4" /> : `S${i + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
}
