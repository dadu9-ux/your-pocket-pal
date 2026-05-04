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
  title: 'Fat-loss Cardio + Mobility & Core',
  format: 'Part A — 40 min Low-intensity Cardio (Zone 2):\n• Rower, bike, or incline walk\n• Heart rate 60-70% max (≈120-135 bpm)\n• Steady, conversational pace — pure fat-burning zone\n• No intervals, keep it boring and easy\n\nPart B — 20 min Stretching + Basic Core:\n\nStretching (10 min, hold each 45-60s):\n• Pigeon stretch (each side)\n• Couch / hip flexor stretch (each side)\n• Hamstring stretch (each side)\n• Thoracic spine opener\n• Doorway chest stretch\n• Child\'s pose\n\nBasic Core (10 min):',
  exercises: [
    {
      id: v4Gen(), name: 'Plank', weight: 'Bodyweight', duration: '45 seconds', notes: 'neutral spine, glutes engaged', sets: 3,
      variations: [
        { name: 'Forearm Plank', duration: '60 seconds' },
        { name: 'Plank Shoulder Taps', reps: '20 taps' },
      ],
    },
    {
      id: v4Gen(), name: 'Dead Bugs', weight: 'Bodyweight', reps: '12 per side', sets: 3,
      variations: [
        { name: 'Bird Dog', reps: '10 per side' },
        { name: 'Hollow Body Hold', duration: '30 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Glute Bridge', weight: 'Bodyweight', reps: '15 reps', sets: 3,
      variations: [
        { name: 'Single-leg Glute Bridge', reps: '10 per side' },
        { name: 'Hip Thrust', reps: '15 reps' },
      ],
    },
    {
      id: v4Gen(), name: 'Side Plank', weight: 'Bodyweight', duration: '30 seconds each side', sets: 2,
      variations: [
        { name: 'Side Plank with Hip Dip', reps: '10 each side' },
        { name: 'Copenhagen Plank', duration: '20 seconds each side' },
      ],
    },
  ],
  notes: 'Goal: active recovery + fat loss. Keep cardio strictly low intensity — no pushing.',
};

const wednesdayWorkout: WorkoutDay = {
  day: 'Wednesday',
  type: 'intensive',
  title: 'Metabolic Conditioning — Fat Torch',
  warmup: '10 min run on treadmill (build to 85% last 3 min)',
  format: '40 min AMRAP | 45 seconds work / 15 seconds rest | 90 seconds rest between rounds | 5-6 rounds',
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
        { name: 'Lateral Box Shuffles', duration: '45 seconds' },
        { name: 'Step-up Jumps', duration: '45 seconds' },
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
      id: v4Gen(), name: 'Burpee Tuck Jumps', weight: 'Bodyweight', duration: '45 seconds', notes: 'max height on tuck', sets: 6,
      variations: [
        { name: 'Burpee Broad Jumps', duration: '45 seconds' },
        { name: 'Sprawl + Star Jump', duration: '45 seconds' },
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
  title: 'Recovery Swim — Aerobic Base (Freestyle)',
  format: 'Freestyle only — 40 min recovery-paced aerobic swim.\nGoal: build aerobic capacity while flushing fatigue. Long intervals, low effort, generous rest.\nKeep heart rate 60-70% max. Breathing should stay easy and rhythmic.\n\nWarm-up: 200m easy freestyle (gradually find your rhythm)\n\nMain Set — choose ONE block based on how you feel:\n\nBlock A (longer continuous):\n• 4 × 400m freestyle @ 65% effort\n• Rest: 60-75 seconds between\n\nBlock B (broken aerobic):\n• 6 × 250m freestyle @ 65% effort\n• Rest: 45-60 seconds between\n\nBlock C (easiest day):\n• 3 × 500m freestyle @ 60% effort\n• Rest: 90 seconds between\n\nCool-down: 200m very easy freestyle, focus on long exhale\n\nTotal volume: ~1800-2000m',
  exercises: [],
  notes: 'Recovery rules: never let breathing become labored. Long, smooth strokes, full glide. If you feel tired, extend rest — never shorten it. Skip if HRV is low.',
};

const fridayWorkout: WorkoutDay = {
  day: 'Friday',
  type: 'intensive',
  title: 'Athletic Agility & Endurance',
  warmup: '10 min run on treadmill (last 3 min: 30s sprint / 30s jog)',
  format: 'Circuit Style | 4 Rounds of 3 mini-circuits | 40 seconds work / 20 seconds rest | 60 seconds between mini-circuits | ~40 min',
  exercises: [
    {
      id: v4Gen(), name: 'Lateral Box Shuffles', weight: 'Bodyweight', duration: '40 seconds', notes: 'quick feet, stay low', sets: 4,
      variations: [
        { name: 'Lateral Bounds', duration: '40 seconds' },
        { name: 'Carioca Steps', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Goblet Squat to Lunge', weight: '16 kg', duration: '40 seconds', notes: 'squat → step back into lunge, alternate', sets: 4,
      variations: [
        { name: 'Walking Lunges', weight: '12 kg each', duration: '40 seconds' },
        { name: 'Curtsy Lunge to Squat', weight: '16 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Sprawl + Squat Jump', weight: 'Bodyweight', duration: '40 seconds', notes: 'chest to floor → explode up', sets: 4,
      variations: [
        { name: 'Burpee + Broad Jump', duration: '40 seconds' },
        { name: 'Inchworm + Jump', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Figure-8s', weight: '16 kg', duration: '40 seconds', notes: 'weave between legs, stay low', sets: 4,
      variations: [
        { name: 'KB Around the World', weight: '16 kg', duration: '40 seconds' },
        { name: 'KB Halo', weight: '12 kg', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'Skater Jumps', weight: 'Bodyweight', duration: '40 seconds', notes: 'max lateral distance, stick landing', sets: 4,
      variations: [
        { name: 'Single-leg Hop + Stick', duration: '40 seconds' },
        { name: 'Lateral Shuffle Touch', duration: '40 seconds' },
      ],
    },
    {
      id: v4Gen(), name: 'KB Swing to High Pull', weight: '16 kg', duration: '40 seconds', notes: 'explosive hips, elbows high', sets: 4,
      variations: [
        { name: 'KB Snatch', weight: '16 kg', duration: '40 seconds' },
        { name: 'KB Clean + Squat', weight: '16 kg', duration: '40 seconds' },
      ],
    },
  ],
  cooldown: 'Hip flexor stretch, Hamstring stretch, Calf stretch — 5 min',
};

// ---- Saturday rotating swim workouts (freestyle only, no drills) ----
// Each week is a different hard freestyle session to build endurance.

const saturdaySwims: { title: string; format: string; notes: string }[] = [
  {
    title: 'Sat Swim — Lactate Threshold (CSS Pace)',
    format: 'Goal: raise critical swim speed (CSS) — your sustainable race pace.\nEffort: ~85% (hard but repeatable). Breathing strong, controlled.\n\nWarm-up: 300m easy freestyle\n\nMain Set: 10 × 100m freestyle @ CSS pace\n• Rest: 15 seconds between reps\n• Pace each 100 within ±2 seconds of the first\n\nCool-down: 200m easy freestyle\nTotal: ~1500m',
    notes: 'CSS work — the gold standard for aerobic threshold. Hold the same pace every rep.',
  },
  {
    title: 'Sat Swim — HIIT Sprints (50m repeats)',
    format: 'Goal: VO2 max + top-end speed.\nEffort: 95-100% on work, full recovery between.\n\nWarm-up: 400m easy freestyle\n\nMain Set: 12 × 50m freestyle ALL-OUT\n• Rest: 60 seconds between reps (or 1:2 work:rest ratio)\n• Every rep should be near max effort\n\nCool-down: 300m very easy freestyle\nTotal: ~1300m',
    notes: 'True HIIT. Quality over quantity — if pace drops >10%, end the set early.',
  },
  {
    title: 'Sat Swim — Threshold Ladder',
    format: 'Goal: lactate threshold + pacing under fatigue.\nEffort: ~85-90% throughout.\n\nWarm-up: 300m easy freestyle\n\nMain Set (ladder up & down):\n• 100m hard, 20s rest\n• 200m hard, 30s rest\n• 300m hard, 40s rest\n• 200m hard, 30s rest\n• 100m hard, 20s rest\n\nCool-down: 200m easy freestyle\nTotal: ~1400m',
    notes: 'Pace each segment so the longest one is your hardest. Negative-split if possible.',
  },
  {
    title: 'Sat Swim — Aerobic Power (200m repeats)',
    format: 'Goal: aerobic power, sustained high output.\nEffort: 85% — strong, smooth, repeatable.\n\nWarm-up: 300m easy freestyle\n\nMain Set: 6 × 200m freestyle\n• Rest: 30 seconds between reps\n• Hold same pace across all 6\n\nCool-down: 200m easy freestyle\nTotal: ~1700m',
    notes: 'Classic threshold endurance. Test yourself against last cycle\'s times.',
  },
  {
    title: 'Sat Swim — HIIT Pyramid (25/50/75)',
    format: 'Goal: speed + lactate tolerance.\nEffort: 90-100% on work intervals.\n\nWarm-up: 400m easy freestyle\n\nMain Set — 3 rounds of:\n• 4 × 25m sprint @ max effort, 30s rest\n• 2 × 50m fast, 45s rest\n• 1 × 75m strong, 60s rest\n\nRest 90 seconds between rounds.\n\nCool-down: 200m easy freestyle\nTotal: ~1350m',
    notes: 'Highest-intensity day of the cycle. Recover fully between rounds.',
  },
  {
    title: 'Sat Swim — Long Threshold (400m repeats)',
    format: 'Goal: sustained threshold endurance.\nEffort: 80-85% — the "comfortably hard" zone.\n\nWarm-up: 300m easy freestyle\n\nMain Set: 4 × 400m freestyle\n• Rest: 45 seconds between reps\n• Even pacing across all 4\n\nCool-down: 200m easy freestyle\nTotal: ~2100m',
    notes: 'Long aerobic threshold work. Track total time vs. previous attempts.',
  },
  {
    title: 'Sat Swim — Broken 1500m Time Trial',
    format: 'Goal: race simulation + mental endurance.\nEffort: 90% — your strongest sustainable pace.\n\nWarm-up: 300m easy freestyle\n\nMain Set: Broken 1500m\n• 500m hard, 30s rest\n• 500m hard, 30s rest\n• 500m hard\n→ Add up total time, that\'s your "broken 1500" benchmark\n\nCool-down: 300m easy freestyle\nTotal: ~2100m',
    notes: 'Benchmark workout — repeat in future cycles to track aerobic progress.',
  },
  {
    title: 'Sat Swim — Sprint + Threshold Combo',
    format: 'Goal: full anaerobic + aerobic stimulus.\n\nWarm-up: 400m easy freestyle\n\nSet A — Sprints: 8 × 50m freestyle ALL-OUT\n• Rest: 45 seconds\n\nRest: 2 minutes\n\nSet B — Threshold: 6 × 100m freestyle @ 85%\n• Rest: 20 seconds\n\nCool-down: 200m easy freestyle\nTotal: ~1600m',
    notes: 'Sprints first while fresh, then settle into threshold pace.',
  },
  // Week 9 (deload) — handled separately, but keep array length 9 for safety
  {
    title: 'Sat Swim — Easy Aerobic (Deload)',
    format: 'Deload week. Pure easy swim, no intensity.\n\n• 300m easy freestyle warm-up\n• 4 × 200m freestyle @ 60% effort, 45s rest\n• 200m easy cool-down\n\nTotal: ~1300m, all comfortable.',
    notes: 'Recovery only. Keep effort easy.',
  },
];

const sundayWorkout: WorkoutDay = {
  day: 'Sunday',
  type: 'rest',
  title: 'Complete Rest',
  exercises: [],
  notes: 'Full recovery day. Light stretching or walk if needed.',
};

// ---- Deload week (Week 9) ----

function buildDeloadWeek(): WorkoutDay[] {
  return [
    {
      day: 'Monday',
      type: 'recovery',
      title: 'Deload — Easy Cardio + Mobility',
      format: '40 min Zone 2 cardio (rower, bike, or incline walk) at 60% effort.\nFollow with 15 min full-body mobility.',
      exercises: [],
      notes: 'Deload week — keep all sessions easy and short.',
    },
    {
      day: 'Tuesday',
      type: 'recovery',
      title: 'Deload — Basic Strength (Light)',
      format: '3 rounds, controlled tempo, 50% normal weights, 60s rest between exercises.',
      exercises: [
        {
          id: v4Gen(), name: 'Goblet Squat', weight: '12 kg', reps: '10 reps', sets: 3,
          variations: [{ name: 'Bodyweight Squat', reps: '15 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Press', weight: '12 kg', reps: '8 per side', sets: 3,
          variations: [{ name: 'Push-ups', reps: '10 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Row', weight: '12 kg', reps: '10 per side', sets: 3,
          variations: [{ name: 'Inverted Row', reps: '10 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Romanian Deadlift', weight: '16 kg', reps: '10 reps', sets: 3,
          variations: [{ name: 'Glute Bridge', reps: '15 reps' }],
        },
      ],
      notes: 'Move well, no grinding. Stop 3 reps before failure.',
    },
    {
      day: 'Wednesday',
      type: 'recovery',
      title: 'Deload — Easy Recovery Swim',
      format: '30 min very easy freestyle.\n• 200m warm-up\n• 4 × 200m @ 60% effort, 60s rest\n• 200m cool-down\nTotal: ~1200m',
      exercises: [],
      notes: 'Smooth and easy. No intensity.',
    },
    {
      day: 'Thursday',
      type: 'recovery',
      title: 'Deload — Stretching + Core',
      format: '30 min full-body stretching session (hold each 60s):\n• Pigeon, Couch, Hamstring, Adductor, Thoracic, Chest, Lats, Calves\n\nLight Core (10 min):',
      exercises: [
        {
          id: v4Gen(), name: 'Plank', weight: 'Bodyweight', duration: '30 seconds', sets: 2,
          variations: [{ name: 'Dead Bug', reps: '10 per side' }],
        },
        {
          id: v4Gen(), name: 'Bird Dog', weight: 'Bodyweight', reps: '10 per side', sets: 2,
          variations: [{ name: 'Glute Bridge', reps: '12 reps' }],
        },
      ],
      notes: 'Focus on breathing and tissue quality.',
    },
    {
      day: 'Friday',
      type: 'recovery',
      title: 'Deload — Easy Cardio + Walk',
      format: '20 min easy bike/row + 20 min walk outdoors.\nKeep heart rate < 130 bpm.',
      exercises: [],
      notes: 'Low and slow. Recharge for next cycle.',
    },
    {
      day: 'Saturday',
      type: 'recovery',
      title: saturdaySwims[8].title,
      format: saturdaySwims[8].format,
      exercises: [],
      notes: saturdaySwims[8].notes,
    },
    sundayWorkout,
  ];
}

function buildRegularWeek(weekIndex: number): WorkoutDay[] {
  const base = [mondayWorkout, tuesdayWorkout, wednesdayWorkout, thursdayWorkout, fridayWorkout];
  const cloned: WorkoutDay[] = base.map(day => ({
    ...day,
    exercises: day.exercises.map(ex => ({
      ...ex,
      id: v4Gen(),
      variations: [...ex.variations],
    })),
  }));

  // Saturday: rotate through saturdaySwims (only first 8 entries used in regular weeks)
  const sat = saturdaySwims[weekIndex % 8];
  const saturdayDay: WorkoutDay = {
    day: 'Saturday',
    type: 'recovery',
    title: sat.title,
    format: sat.format,
    exercises: [],
    notes: sat.notes,
  };

  return [...cloned, saturdayDay, sundayWorkout];
}

function generateWeeks(totalWeeks: number): WorkoutDay[][] {
  const weeks: WorkoutDay[][] = [];
  for (let w = 0; w < totalWeeks; w++) {
    if (w === totalWeeks - 1) {
      weeks.push(buildDeloadWeek());
    } else {
      weeks.push(buildRegularWeek(w));
    }
  }
  return weeks;
}

export function createFunctionalFitnessPlan(): WorkoutPlan {
  const totalWeeks = 9;
  const weekDays = generateWeeks(totalWeeks);

  return {
    id: v4Gen(),
    name: 'Functional Fitness',
    description: 'HIIT • Endurance • Explosiveness • Swim Recovery (9-week cycle)',
    totalWeeks,
    startWeight: 105,
    goalWeight: 90,
    daysPerWeek: 6,
    weeks: weekDays.map((days, i) => ({ weekNumber: i + 1, days })),
    createdAt: new Date().toISOString(),
  };
}
