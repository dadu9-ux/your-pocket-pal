import { WorkoutPlan, WorkoutDay } from '@/types/workout';
import { v4Gen } from '@/lib/idgen';

const mondayWorkout: WorkoutDay = {
  day: 'Monday',
  type: 'intensive',
  title: 'Strength & Power — Heavy Grinds',
  warmup: '10 min run on treadmill (build to 75% last 2 min)',
  format: 'Strength Focus | 5 Rounds | 40 seconds on / 20 seconds off | 90 seconds rest between rounds | ~40 min',
  exercises: [
    {
      id: v4Gen(), name: 'Double KB Front Squat', weight: '16 kg each', duration: '40 seconds', notes: 'controlled tempo, full depth', sets: 5,
      variations: [
        { name: 'Goblet Squat', weight: '24 kg', duration: '40 seconds' },
        { name: 'KB Zercher Squat', weight: '20 kg', duration: '40 seconds' },
        { name: 'Bulgarian Split Squat', weight: '16 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Clean & Press', weight: '16 kg', duration: '40 seconds', notes: 'strict press, alternate arms', sets: 5,
      variations: [
        { name: 'KB Push Press', weight: '20 kg', duration: '40 seconds' },
        { name: 'KB Floor Press', weight: '16 kg each', duration: '40 seconds' },
        { name: 'KB Z-Press (seated)', weight: '12 kg each', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Pull-ups', weight: 'Bodyweight', duration: '40 seconds', notes: 'strict form, bands if needed', sets: 5,
      variations: [
        { name: 'Chin-ups', duration: '40 seconds' },
        { name: 'Weighted Pull-ups', weight: '+5 kg', duration: '40 seconds' },
        { name: 'Archer Pull-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Single-leg Deadlift', weight: '16 kg', duration: '40 seconds', notes: 'per side, slow eccentric', sets: 5,
      variations: [
        { name: 'KB Sumo Deadlift', weight: '24 kg', duration: '40 seconds' },
        { name: 'KB Swing to Deadlift', weight: '20 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Ring / Bar Dips', weight: 'Bodyweight', duration: '40 seconds', notes: 'full ROM', sets: 5,
      variations: [
        { name: 'Decline Push-ups', duration: '40 seconds' },
        { name: 'Diamond Push-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Renegade Rows', weight: '12 kg each', duration: '40 seconds', notes: 'no hip rotation', sets: 5,
      variations: [
        { name: 'KB Bent-over Row', weight: '16 kg each', duration: '40 seconds' },
        { name: 'Gorilla Rows', weight: '16 kg each', duration: '40 seconds' },
      ],
    },
  ],
  cooldown: 'Pigeon stretch, Couch stretch, Doorway chest stretch — 5 min',
};

const tuesdayWorkout: WorkoutDay = {
  day: 'Tuesday',
  type: 'recovery',
  title: 'Active Recovery + Loaded Carries',
  format: 'LISS Cardio: 40 min rower/bike/incline walk (HR 120-140 bpm)\nPart B — 3 Rounds:',
  exercises: [
    {
      id: v4Gen(), name: 'Single-leg Romanian Deadlift', weight: 'Light KB', reps: '10 per side', sets: 3,
      variations: [
        { name: 'KB Good Morning', weight: 'Light KB', reps: '12 reps' },
        { name: 'Hip Hinge with Band', reps: '15 reps' },
      ],
    },
    {
      id: v4Gen(), name: 'Overhead Carry', weight: '12 kg each', reps: '30m', sets: 3,
      variations: [
        { name: 'Suitcase Carry', weight: 'Heavy KB', reps: '30m each side' },
        { name: 'Rack Carry', weight: '16 kg each', reps: '30m' },
      ],
    },
    {
      id: v4Gen(), name: 'Turkish Get-ups', weight: 'Light KB', reps: '3 per side slow', sets: 3,
      variations: [
        { name: 'Half Turkish Get-up', weight: 'Medium KB', reps: '5 per side' },
        { name: 'Windmill', weight: 'Light KB', reps: '5 per side' },
      ],
    },
    {
      id: v4Gen(), name: 'Dead Bugs', weight: 'Bodyweight', reps: '12 per side', sets: 3,
      variations: [
        { name: 'Pallof Press', reps: '10 per side' },
        { name: 'Bird Dog', reps: '10 per side' },
      ],
    },
  ],
};

const wednesdayWorkout: WorkoutDay = {
  day: 'Wednesday',
  type: 'intensive',
  title: 'Metabolic Burn — Minimal Equipment',
  warmup: '10 min run on treadmill (build to 85% last 3 min)',
  format: '40 min AMRAP | 45 seconds work / 15 seconds rest | 90 seconds rest between rounds | Aim for 5-6 rounds',
  exercises: [
    {
      id: v4Gen(), name: 'KB Swing to Burpee', weight: '16 kg', duration: '45 seconds', notes: '5 swings → 1 burpee, repeat', sets: 6,
      variations: [
        { name: 'KB Swing + Sprawl', weight: '16 kg', duration: '45 seconds' },
        { name: 'KB Deadlift + Burpee', weight: '20 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Box Jump Overs', weight: 'Bodyweight', duration: '45 seconds', notes: 'step down for safety', sets: 6,
      variations: [
        { name: 'Lateral Box Jumps', duration: '45 seconds' },
        { name: 'Step-up Jumps', duration: '45 seconds' },
        { name: 'Depth Jumps', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Thruster', weight: '12 kg each', duration: '45 seconds', notes: 'deep squat to full press', sets: 6,
      variations: [
        { name: 'Single KB Thruster', weight: '16 kg', duration: '45 seconds', notes: 'alternate sides each round' },
        { name: 'Goblet Squat to Press', weight: '20 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Burpee Broad Jumps', weight: 'Bodyweight', duration: '45 seconds', sets: 6,
      variations: [
        { name: 'Burpee Tuck Jumps', duration: '45 seconds' },
        { name: 'Sprawl + Squat Jump', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Snatch', weight: '16 kg', duration: '45 seconds', notes: 'switch arms halfway', sets: 6,
      variations: [
        { name: 'KB Clean to Squat', weight: '16 kg', duration: '45 seconds' },
        { name: 'KB High Pull', weight: '16 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Squat Jump + Sprawl', weight: 'Bodyweight', duration: '45 seconds', notes: '2 squat jumps → 1 sprawl', sets: 6,
      variations: [
        { name: 'Plyo Lunges', duration: '45 seconds' },
        { name: 'Skater Jumps', duration: '45 seconds' },
        { name: 'High Knees Sprint', duration: '45 seconds' },
      ],
    },
  ],
  optionB: 'Tabata Finisher (4 min):\n• 20s ON / 10s OFF × 8 rounds\n• Alternate: KB Swings + Burpees\n\nCooldown: 5 min walk + stretch',
};

const thursdayWorkout: WorkoutDay = {
  day: 'Thursday',
  type: 'recovery',
  title: 'Swim Endurance + Core',
  format: 'Swimming — 40 min Endurance Session:\n• Warm-up: 200m easy freestyle\n• Main Set: 8×100m freestyle @ 70% effort (20s rest)\n• Technique: 4×50m catch-up drill (focus on long stroke)\n• Kick Set: 4×50m kick with board (build effort each 50)\n• Cool-down: 200m easy backstroke\n\nDry-land Core (10 min):',
  exercises: [
    {
      id: v4Gen(), name: 'Hanging Knee Raises', weight: 'Bodyweight', reps: '12 reps', sets: 3,
      variations: [
        { name: 'Hanging Leg Raises', reps: '8 reps' },
        { name: 'Toes to Bar', reps: '6 reps' },
        { name: 'Captain\'s Chair Leg Raise', reps: '12 reps' },
      ],
    },
    {
      id: v4Gen(), name: 'Side Plank', weight: 'Bodyweight', duration: '30 seconds each side', sets: 3,
      variations: [
        { name: 'Copenhagen Plank', duration: '20 seconds each side' },
        { name: 'Side Plank with Hip Dip', reps: '10 each side' },
      ],
    },
    {
      id: v4Gen(), name: 'Flutter Kicks', weight: 'Bodyweight', duration: '30 seconds', sets: 3,
      variations: [
        { name: 'Scissor Kicks', duration: '30 seconds' },
        { name: 'Hollow Body Hold', duration: '30 seconds' },
      ],
    },
  ],
  notes: 'Swimming focus: steady-state endurance. Keep heart rate 60-75% max. No sprints.',
};

const fridayWorkout: WorkoutDay = {
  day: 'Friday',
  type: 'intensive',
  title: 'Explosive Strength + Power',
  warmup: '10 min run on treadmill',
  format: '5 Rounds | 40 seconds on / 20 seconds off | 60 seconds rest between rounds | ~40 min total',
  exercises: [
    {
      id: v4Gen(), name: 'KB Clean & Press', weight: '16 kg', duration: '40 seconds', notes: 'alternate arms', sets: 5,
      variations: [
        { name: 'KB Push Press', weight: '20 kg', duration: '40 seconds' },
        { name: 'KB Jerk', weight: '16 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Pull-ups', weight: 'Bodyweight', duration: '40 seconds', notes: 'bands/negatives if needed', sets: 5,
      variations: [
        { name: 'Chin-ups', duration: '40 seconds' },
        { name: 'Neutral Grip Pull-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Box Jump Step-downs', weight: 'Bodyweight', duration: '40 seconds', notes: 'explosive up, controlled step down', sets: 5,
      variations: [
        { name: 'Depth Jump to Broad Jump', duration: '40 seconds' },
        { name: 'Single-leg Box Step-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'One-arm KB Swing', weight: '16 kg', duration: '40 seconds', notes: 'explosive hip drive', sets: 5,
      variations: [
        { name: 'KB Snatch', weight: '16 kg', duration: '40 seconds' },
        { name: 'Double KB Clean', weight: '12 kg each', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Dips', weight: 'Bodyweight', duration: '40 seconds', notes: 'bars or bench', sets: 5,
      variations: [
        { name: 'Close-grip Push-ups', duration: '40 seconds' },
        { name: 'Pike Push-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Burpee + Tuck Jump', weight: 'Bodyweight', duration: '40 seconds', notes: 'max height on tuck', sets: 5,
      variations: [
        { name: 'Burpee + Squat Jump', duration: '40 seconds' },
        { name: 'Sprawl + Star Jump', duration: '40 seconds' },
      ],
    },
  ],
  cooldown: 'Lat stretch, Chest stretch, Hip flexor stretch — 5 min',
};

const saturdayWorkout: WorkoutDay = {
  day: 'Saturday',
  type: 'recovery',
  title: 'Swim Endurance + Technique',
  format: 'Swimming — 40 min Fat-loss Endurance Session:\n• Warm-up: 300m easy mixed stroke\n• Main Set: 10×100m freestyle @ steady pace (15s rest)\n• Drill: 4×50m fingertip drag drill\n• Pull Set: 4×75m with pull buoy (focus on rotation)\n• Kick Set: 4×50m flutter kick (moderate effort)\n• Cool-down: 200m easy backstroke\n\nKB Technique Practice (15 min):',
  exercises: [
    {
      id: v4Gen(), name: 'Clean & Press Practice', weight: 'Light KB', duration: '10 minutes practice', sets: 1,
      variations: [
        { name: 'Snatch Practice', weight: 'Light KB', duration: '10 minutes' },
      ],
    },
    {
      id: v4Gen(), name: 'Turkish Get-up Practice', weight: 'Light KB', duration: '5 minutes practice', sets: 1,
      variations: [
        { name: 'Windmill Practice', weight: 'Light KB', duration: '5 minutes' },
      ],
    },
  ],
  notes: 'Swimming focus: aerobic fat-burning zone. Keep heart rate 60-70% max. Long, smooth strokes.',
};

const sundayWorkout: WorkoutDay = {
  day: 'Sunday',
  type: 'rest',
  title: 'Complete Rest',
  exercises: [],
  notes: 'Full recovery day. Light stretching or walk if needed.',
};

function generateWeeks(totalWeeks: number): WorkoutDay[][] {
  const baseDays = [mondayWorkout, tuesdayWorkout, wednesdayWorkout, thursdayWorkout, fridayWorkout, saturdayWorkout, sundayWorkout];
  const weeks: WorkoutDay[][] = [];
  for (let w = 0; w < totalWeeks; w++) {
    const weekDays = baseDays.map(day => ({
      ...day,
      exercises: day.exercises.map(ex => ({
        ...ex,
        id: v4Gen(),
        variations: [...ex.variations],
      })),
    }));
    weeks.push(weekDays);
  }
  return weeks;
}

export function createFunctionalFitnessPlan(): WorkoutPlan {
  const totalWeeks = 12;
  const weekDays = generateWeeks(totalWeeks);

  return {
    id: v4Gen(),
    name: 'Functional Fitness',
    description: 'HIIT • Endurance • Explosiveness • Swim Recovery',
    totalWeeks,
    startWeight: 105,
    goalWeight: 90,
    daysPerWeek: 6,
    weeks: weekDays.map((days, i) => ({ weekNumber: i + 1, days })),
    createdAt: new Date().toISOString(),
  };
}
