export type WorkoutType = 'intensive' | 'recovery' | 'rest';

export interface ExerciseVariation {
  name: string;
  weight?: string;
  duration?: string;
  reps?: string;
  notes?: string;
}

export interface Exercise {
  id: string;
  name: string;
  weight?: string;
  duration?: string;
  reps?: string;
  sets: number;
  notes?: string;
  variations: ExerciseVariation[];
}

export interface WorkoutDay {
  day: string;
  type: WorkoutType;
  title: string;
  warmup?: string;
  format?: string;
  exercises: Exercise[];
  cooldown?: string;
  notes?: string;
  optionB?: string;
}

export interface WeekPlan {
  weekNumber: number;
  days: WorkoutDay[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  totalWeeks: number;
  startWeight?: number;
  goalWeight?: number;
  daysPerWeek: number;
  weeks: WeekPlan[];
  createdAt: string;
}

export interface SetCompletion {
  completed: boolean;
  reps?: number;
  weight?: number;
}

export interface ExerciseProgress {
  exerciseId: string;
  selectedVariation?: number; // index of chosen variation, -1 for default
  sets: SetCompletion[];
  notes?: string;
}

export interface DayProgress {
  day: string;
  completed: boolean;
  exercises: ExerciseProgress[];
  workoutNotes?: string;
}

export interface WeekProgress {
  weekNumber: number;
  days: DayProgress[];
}

export interface PlanProgress {
  planId: string;
  weeks: WeekProgress[];
  bodyWeight: { date: string; weight: number }[];
  measurements: {
    date: string;
    waist?: number;
    chest?: number;
    arms?: number;
    thighs?: number;
  }[];
}
