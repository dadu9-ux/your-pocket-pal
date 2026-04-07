import { WorkoutPlan, WorkoutDay } from '@/types/workout';
import { v4Gen } from '@/lib/idgen';

const mondayWorkout: WorkoutDay = {
  day: 'Monday',
  type: 'intensive',
  title: 'Kettlebell + Calisthenics Hybrid',
  warmup: '10 min run on treadmill',
  format: '4 Rounds | 40 seconds on / 20 seconds off | 60 seconds rest between rounds',
  exercises: [
    {
      id: v4Gen(), name: 'Double Kettlebell Front Squat', weight: '16 kg', duration: '40 seconds', sets: 4,
      variations: [
        { name: 'Goblet Squat', weight: '20 kg', duration: '40 seconds' },
        { name: 'Bulgarian Split Squat', weight: '12 kg each', duration: '40 seconds' },
        { name: 'Zercher Squat', weight: '16 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Push-ups', weight: 'Bodyweight', duration: '40 seconds', notes: 'decline/feet elevated', sets: 4,
      variations: [
        { name: 'Diamond Push-ups', duration: '40 seconds' },
        { name: 'Archer Push-ups', duration: '40 seconds' },
        { name: 'Pike Push-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Single-arm Kettlebell Swings', weight: '16 kg', duration: '40 seconds', notes: 'alternate arms', sets: 4,
      variations: [
        { name: 'Double Kettlebell Swings', weight: '12 kg each', duration: '40 seconds' },
        { name: 'Kettlebell Snatch', weight: '16 kg', duration: '40 seconds' },
        { name: 'Kettlebell High Pull', weight: '16 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Ring Rows / Inverted Rows', weight: 'Bodyweight', duration: '40 seconds', sets: 4,
      variations: [
        { name: 'Bent-over Kettlebell Row', weight: '16 kg each', duration: '40 seconds' },
        { name: 'Renegade Rows', weight: '12 kg', duration: '40 seconds' },
        { name: 'TRX Rows', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Kettlebell Farmer Carry', weight: '20 kg each', duration: '40 seconds march', sets: 4,
      variations: [
        { name: 'Overhead Carry', weight: '12 kg each', duration: '40 seconds' },
        { name: 'Rack Carry', weight: '16 kg each', duration: '40 seconds' },
        { name: 'Suitcase Carry', weight: '24 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Plank with Tap Outs', weight: 'Bodyweight', duration: '40 seconds', sets: 4,
      variations: [
        { name: 'Plank to Push-up', duration: '40 seconds' },
        { name: 'Mountain Climbers', duration: '40 seconds' },
        { name: 'Ab Wheel Rollout', reps: '10 reps' },
      ],
    },
  ],
  cooldown: 'Pigeon stretch, Couch stretch',
};

const tuesdayWorkout: WorkoutDay = {
  day: 'Tuesday',
  type: 'recovery',
  title: 'Swim + Loaded Carries',
  format: 'Swimming: 30-40 min (mix freestyle & backstroke, easy pace, focus on breathing)\nOR LISS Cardio: 40 min rower/bike/incline walk\nPart B - 3 Rounds:',
  exercises: [
    {
      id: v4Gen(), name: 'Single-leg Romanian Deadlift', weight: 'Light KB', reps: '10 per side', sets: 3,
      variations: [
        { name: 'Kettlebell Good Morning', weight: 'Light KB', reps: '12 reps' },
        { name: 'Hip Hinge with Band', reps: '15 reps' },
      ],
    },
    {
      id: v4Gen(), name: 'Suitcase Carries', weight: 'Heavy KB', reps: '30m each side', sets: 3,
      variations: [
        { name: 'Waiter Walk', weight: 'Medium KB', reps: '30m each side' },
        { name: 'Bottom-up Carry', weight: 'Light KB', reps: '20m each side' },
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
  title: 'Metabolic Fat Burn Circuit',
  warmup: '10 min run on treadmill (build to 80% effort last 2 min)',
  format: '40 min AMRAP-style circuit | 45 seconds work / 15 seconds rest | 90 seconds rest between rounds | Aim for 5-6 rounds',
  exercises: [
    {
      id: v4Gen(), name: 'Kettlebell Swing to Burpee', weight: '16 kg', duration: '45 seconds', notes: '5 swings → 1 burpee, repeat', sets: 6,
      variations: [
        { name: 'Devil Press (KB)', weight: '12 kg each', duration: '45 seconds' },
        { name: 'Swing + Sprawl', weight: '16 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Kettlebell Thruster', weight: '12 kg each', duration: '45 seconds', notes: 'full depth squat to press', sets: 6,
      variations: [
        { name: 'Single KB Thruster', weight: '16 kg', duration: '45 seconds', notes: 'alternate sides each round' },
        { name: 'Goblet Squat to Press', weight: '20 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Mountain Climbers', weight: 'Bodyweight', duration: '45 seconds', notes: 'fast pace', sets: 6,
      variations: [
        { name: 'Plyo Lunges', duration: '45 seconds' },
        { name: 'Skater Jumps', duration: '45 seconds' },
        { name: 'High Knees', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Kettlebell Snatch', weight: '16 kg', duration: '45 seconds', notes: 'switch arms halfway', sets: 6,
      variations: [
        { name: 'KB High Pull', weight: '16 kg', duration: '45 seconds' },
        { name: 'KB Clean to Squat', weight: '16 kg', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Burpee Broad Jumps', weight: 'Bodyweight', duration: '45 seconds', sets: 6,
      variations: [
        { name: 'Box Jump Burpees', duration: '45 seconds' },
        { name: 'Step-back Burpees + Tuck Jump', duration: '45 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Battle Ropes / KB Alternating Swings', weight: '12 kg each', duration: '45 seconds', sets: 6,
      variations: [
        { name: 'Rope Slams', duration: '45 seconds' },
        { name: 'KB Figure-8s', weight: '16 kg', duration: '45 seconds' },
      ],
    },
  ],
  optionB: 'Tabata Finisher (4 min):\n• 20s ON / 10s OFF × 8 rounds\n• Alternate: KB Swings + Burpees\n\nCooldown: 5 min walk + stretch',
};

const thursdayWorkout: WorkoutDay = {
  day: 'Thursday',
  type: 'recovery',
  title: 'Swim / Row + Core',
  format: 'Swimming: 30-40 min (drill focus: catch-up drill, kick sets, easy intervals)\nOR Easy Row: 30 min (18-20 SPM)\n90/90 Hip Stretches: 10 min | Couch Stretch: 2 min each | Deep Squat Hold: 2 min\nCore Finisher:',
  exercises: [
    {
      id: v4Gen(), name: 'Hanging Knee Raises', weight: 'Bodyweight', reps: '10 reps', sets: 3,
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
  ],
};

const fridayWorkout: WorkoutDay = {
  day: 'Friday',
  type: 'intensive',
  title: 'Push/Pull + Kettlebell Power',
  warmup: '10 min run on treadmill',
  format: '4 Rounds | 40 seconds on / 20 seconds off | 60 seconds rest between rounds',
  exercises: [
    {
      id: v4Gen(), name: 'Kettlebell Clean & Press', weight: '16 kg', duration: '40 seconds', notes: 'alternate arms', sets: 4,
      variations: [
        { name: 'Kettlebell Push Press', weight: '20 kg', duration: '40 seconds' },
        { name: 'Kettlebell Thruster', weight: '12 kg each', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Pull-ups', weight: 'Bodyweight', duration: '40 seconds', notes: 'bands/negatives', sets: 4,
      variations: [
        { name: 'Chin-ups', duration: '40 seconds' },
        { name: 'Neutral Grip Pull-ups', duration: '40 seconds' },
        { name: 'Lat Pulldown', weight: 'Machine', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Dips', weight: 'Bodyweight', duration: '40 seconds', notes: 'bars or bench', sets: 4,
      variations: [
        { name: 'Ring Dips', duration: '40 seconds' },
        { name: 'Close-grip Push-ups', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'One-arm Kettlebell Swings', weight: '16 kg', duration: '40 seconds', notes: 'explosive', sets: 4,
      variations: [
        { name: 'Kettlebell Snatch', weight: '16 kg', duration: '40 seconds' },
        { name: 'Double KB Clean', weight: '12 kg each', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Push-ups on Kettlebells', weight: 'Bodyweight', duration: '40 seconds', sets: 4,
      variations: [
        { name: 'Deficit Push-ups', duration: '40 seconds' },
        { name: 'Spiderman Push-ups', duration: '40 seconds' },
      ],
    },
  ],
  cooldown: 'Lat stretch, Chest stretch',
};

const saturdayWorkout: WorkoutDay = {
  day: 'Saturday',
  type: 'recovery',
  title: 'Swim / Endurance + Technique',
  format: 'Swimming: 40 min (endurance swim: 10×100m with 20s rest, or continuous 1500m)\nOR Conditioning (40 min): Row 5×500m or Bike 5×4min threshold\nKettlebell Technique (15 min):',
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
};

const sundayWorkout: WorkoutDay = {
  day: 'Sunday',
  type: 'rest',
  title: 'Complete Rest',
  exercises: [],
  notes: 'Full recovery day. Light stretching if needed.',
};

function generateWeeks(totalWeeks: number): WorkoutDay[][] {
  const baseDays = [mondayWorkout, tuesdayWorkout, wednesdayWorkout, thursdayWorkout, fridayWorkout, saturdayWorkout, sundayWorkout];
  const weeks: WorkoutDay[][] = [];
  
  for (let w = 0; w < totalWeeks; w++) {
    // Deep clone and regenerate IDs per week
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

export function createDefaultPlan(): WorkoutPlan {
  const totalWeeks = 12;
  const weekDays = generateWeeks(totalWeeks);

  return {
    id: v4Gen(),
    name: 'Kettlebell Power - Basic',
    description: '105 kg → 90 kg • 6 Days/Week Transformation',
    totalWeeks,
    startWeight: 105,
    goalWeight: 90,
    daysPerWeek: 6,
    weeks: weekDays.map((days, i) => ({ weekNumber: i + 1, days })),
    createdAt: new Date().toISOString(),
  };
}

export const MOTIVATIONAL_QUOTES = [
  { text: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.", author: "Sun Tzu, The Art of War" },
  { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Arnold Schwarzenegger" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
];
