import { WorkoutPlan, WorkoutDay } from '@/types/workout';
import { v4Gen } from '@/lib/idgen';

// ============================================================
// MONDAY — Ergometer Drills (moderate to high intensity, ~40 min)
// Rotates across weeks to keep stimulus varied.
// ============================================================

const mondayErgSessions: { title: string; format: string; notes: string }[] = [
  {
    title: 'Erg — 6 × 500m Intervals',
    format: 'Rower (or bike erg). Moderate-high intensity.\n\nWarm-up: 5 min easy row, build pace last minute.\n\nMain set: 6 × 500m\n• Effort: ~85% (hard but controlled, 2k pace +3-5s)\n• Rest: 90 seconds easy paddle between\n\nCool-down: 5 min easy row\nTotal: ~40 min',
    notes: 'Keep splits within 2 seconds across all 6. Strong legs, relaxed shoulders.',
  },
  {
    title: 'Erg — 4 × 1000m Threshold',
    format: 'Rower threshold work.\n\nWarm-up: 5 min easy + 4 × 20s build sprints\n\nMain set: 4 × 1000m\n• Effort: ~80-85% (sustainable hard pace)\n• Rest: 2 min easy paddle\n\nCool-down: 5 min easy\nTotal: ~40 min',
    notes: 'Aerobic threshold focus. Even pacing — no surge starts.',
  },
  {
    title: 'Erg — Pyramid (250/500/750/500/250)',
    format: 'Pyramid intervals on rower.\n\nWarm-up: 5 min easy\n\nMain set (2 rounds):\n• 250m hard / 60s rest\n• 500m hard / 90s rest\n• 750m hard / 2 min rest\n• 500m hard / 90s rest\n• 250m hard / 2 min rest between rounds\n\nCool-down: 5 min easy\nTotal: ~40 min',
    notes: 'Pace the 750 the smartest — it sets the ceiling for the round.',
  },
  {
    title: 'Erg — Tabata Mix',
    format: 'High-intensity intervals.\n\nWarm-up: 8 min easy row, gradual build\n\nMain set — 4 Tabata blocks (alternate rower / bike if available):\n• 8 × 20s ALL-OUT / 10s rest = 4 min\n• Rest 2 min between blocks\n\nCool-down: 8 min easy row\nTotal: ~40 min',
    notes: 'Top-end power day. Reach max watts each 20s interval.',
  },
  {
    title: 'Erg — 5 × 750m',
    format: 'Lactate threshold builder.\n\nWarm-up: 5 min easy + 3 × 30s pickups\n\nMain set: 5 × 750m\n• Effort: ~85% — hard breathing but controlled\n• Rest: 2 min easy paddle\n\nCool-down: 5 min easy\nTotal: ~40 min',
    notes: 'Track total meters and average split — benchmark for next cycle.',
  },
  {
    title: 'Erg — 30/30 Intervals',
    format: 'VO2-style short intervals.\n\nWarm-up: 8 min easy row\n\nMain set — 3 rounds of:\n• 10 × 30s hard / 30s easy\n• Rest 3 min between rounds\n\nCool-down: 5 min easy\nTotal: ~40 min',
    notes: 'Aim for consistent watts across all 30 intervals.',
  },
  {
    title: 'Erg — 2 × 2000m',
    format: 'Race-pace effort.\n\nWarm-up: 8 min easy + 4 × 20s build\n\nMain set: 2 × 2000m\n• Effort: 80-85% — strong, repeatable pace\n• Rest: 4 min easy paddle between\n\nCool-down: 5 min easy\nTotal: ~40 min',
    notes: 'Aerobic capacity day. Negative-split the second 2k if possible.',
  },
  {
    title: 'Erg — Power Strokes Ladder',
    format: 'Power + endurance mix.\n\nWarm-up: 5 min easy\n\nMain set (3 rounds):\n• 20 power strokes (max effort, full drive)\n• 60s easy paddle\n• 500m @ 80% effort\n• 90s easy paddle\n\nCool-down: 8 min easy\nTotal: ~40 min',
    notes: 'Connects raw power output with sustained aerobic work.',
  },
];

// ============================================================
// TUESDAY — Calisthenics Strength Maintenance (low-moderate, 40 min)
// Stable bodyweight session, controlled tempo, sub-maximal.
// ============================================================

const tuesdayWorkout: WorkoutDay = {
  day: 'Tuesday',
  type: 'recovery',
  title: 'Calisthenics — Strength Maintenance',
  warmup: '5 min easy mobility: shoulder circles, hip openers, leg swings',
  format: 'Low to moderate intensity. Goal: maintain strength patterns without fatigue.\n3 rounds | controlled tempo (3s down, 1s pause, 1s up) | 60s rest between exercises | ~40 min',
  exercises: [
    {
      id: v4Gen(), name: 'Push-ups', weight: 'Bodyweight', reps: '10-12 reps', sets: 3, notes: 'stop 3 reps shy of failure',
      variations: [
        { name: 'Incline Push-ups', reps: '12-15 reps' },
        { name: 'Diamond Push-ups', reps: '8-10 reps' },
        { name: 'Archer Push-ups', reps: '6 per side' },
      ],
    },
    {
      id: v4Gen(), name: 'Bodyweight Squats', weight: 'Bodyweight', reps: '15 reps', sets: 3, notes: 'full depth, slow tempo',
      variations: [
        { name: 'Cossack Squat', reps: '8 per side' },
        { name: 'Pistol Progressions', reps: '5 per side' },
      ],
    },
    {
      id: v4Gen(), name: 'Pull-ups (assisted if needed)', weight: 'Bodyweight', reps: '5-8 reps', sets: 3, notes: 'never to failure',
      variations: [
        { name: 'Australian Rows', reps: '10-12 reps' },
        { name: 'Negative Pull-ups', reps: '4 reps (5s descent)' },
      ],
    },
    {
      id: v4Gen(), name: 'Walking Lunges', weight: 'Bodyweight', reps: '10 per leg', sets: 3,
      variations: [
        { name: 'Reverse Lunge', reps: '10 per side' },
        { name: 'Bulgarian Split Squat', reps: '8 per side' },
      ],
    },
    {
      id: v4Gen(), name: 'Dips (bench or rings)', weight: 'Bodyweight', reps: '8 reps', sets: 3, notes: 'controlled, full ROM',
      variations: [
        { name: 'Bench Dips', reps: '12 reps' },
        { name: 'Ring Dips', reps: '6 reps' },
      ],
    },
    {
      id: v4Gen(), name: 'Hollow Body Hold', weight: 'Bodyweight', duration: '30 seconds', sets: 3,
      variations: [
        { name: 'Plank', duration: '45 seconds' },
        { name: 'L-sit Hold', duration: '15 seconds' },
      ],
    },
  ],
  cooldown: '5 min stretch: chest, lats, hip flexors, hamstrings',
  notes: 'Keep effort 6-7/10. Maintenance only — should leave the session feeling fresh, not drained.',
};

// ============================================================
// WEDNESDAY — Swimming HIIT (rotates across weeks, freestyle only)
// ============================================================

const wednesdayHIITSwims: { title: string; format: string; notes: string }[] = [
  {
    title: 'Swim HIIT — 12 × 50m All-Out',
    format: 'Freestyle sprint HIIT.\n\nWarm-up: 400m easy freestyle\n\nMain set: 12 × 50m freestyle ALL-OUT\n• Rest: 60s between reps\n• Maintain near-max effort throughout\n\nCool-down: 300m very easy\nTotal: ~1300m',
    notes: 'Quality over quantity. Stop the set if pace drops >10%.',
  },
  {
    title: 'Swim HIIT — 8 × 100m Hard',
    format: 'Anaerobic capacity.\n\nWarm-up: 400m easy\n\nMain set: 8 × 100m freestyle @ 90-95% effort\n• Rest: 45-60s between\n\nCool-down: 200m easy\nTotal: ~1400m',
    notes: 'Hold pace within 2-3s across all 8 reps.',
  },
  {
    title: 'Swim HIIT — 25/50/75 Pyramid',
    format: 'Speed + lactate tolerance.\n\nWarm-up: 400m easy\n\nMain set — 3 rounds of:\n• 4 × 25m sprint @ max, 30s rest\n• 2 × 50m fast, 45s rest\n• 1 × 75m strong, 60s rest\nRest 90s between rounds\n\nCool-down: 200m easy\nTotal: ~1350m',
    notes: 'Highest intensity of the week. Recover fully between rounds.',
  },
  {
    title: 'Swim HIIT — Tabata Style',
    format: 'Short, brutal intervals.\n\nWarm-up: 400m easy\n\nMain set — 4 rounds:\n• 8 × 20s ALL-OUT freestyle / 10s rest at wall\n• Rest 2 min between rounds\n\nCool-down: 300m very easy\nTotal: ~1200m',
    notes: 'Pure anaerobic stimulus. Push every 20s.',
  },
  {
    title: 'Swim HIIT — Broken 400s',
    format: 'Sustained high intensity.\n\nWarm-up: 400m easy\n\nMain set: 3 × (4 × 100m freestyle @ 90%)\n• 15s rest between 100s\n• 90s rest between sets\n\nCool-down: 200m easy\nTotal: ~1800m',
    notes: 'Holds threshold under accumulating fatigue.',
  },
  {
    title: 'Swim HIIT — 50m Descending',
    format: 'Speed work with progressive overload.\n\nWarm-up: 400m easy\n\nMain set: 4 × (4 × 50m freestyle, each faster than the last)\n• 30s rest between 50s\n• 90s rest between rounds\n\nCool-down: 200m easy\nTotal: ~1400m',
    notes: 'Rep 1 = strong; rep 4 = max effort.',
  },
  {
    title: 'Swim HIIT — 200m Repeats',
    format: 'VO2 max work.\n\nWarm-up: 400m easy\n\nMain set: 5 × 200m freestyle @ 90%\n• Rest: 60s between\n\nCool-down: 200m easy\nTotal: ~1600m',
    notes: 'Sustained near-threshold pace. Mental toughness day.',
  },
  {
    title: 'Swim HIIT — Sprint Ladder',
    format: 'Power + speed combo.\n\nWarm-up: 400m easy\n\nMain set: 25 / 50 / 75 / 100 / 75 / 50 / 25 — all ALL-OUT freestyle\n• Rest = distance you just swam (e.g. 25m sprint → 25s rest)\n\nCool-down: 300m easy\nTotal: ~1100m',
    notes: 'Aggressive intervals — recover fully between.',
  },
];

// ============================================================
// THURSDAY — Active Recovery (1 hour)
// ============================================================

const thursdayWorkout: WorkoutDay = {
  day: 'Thursday',
  type: 'recovery',
  title: 'Active Recovery — 60 min',
  format: 'Goal: blood flow, mobility, parasympathetic recovery. Keep HR < 130 bpm throughout.\n\nBlock A — 30 min Zone 1 cardio (choose one):\n• Easy outdoor walk (brisk but conversational)\n• Easy bike ride\n• Easy elliptical or incline walk\n\nBlock B — 20 min Mobility Flow (hold each 60s):\n• Pigeon stretch (each side)\n• Couch / hip flexor stretch (each side)\n• Hamstring stretch (each side)\n• Adductor stretch\n• Thoracic spine opener\n• Doorway chest stretch\n• Lat stretch (each side)\n• Child\'s pose\n\nBlock C — 10 min Breathwork / Foam Roll:\n• 5 min slow nasal breathing (4s in, 6s out)\n• 5 min full-body foam roll (quads, IT band, glutes, upper back)',
  exercises: [],
  notes: 'Strictly recovery. If you feel tired, shorten — never push intensity.',
};

// ============================================================
// FRIDAY — Calisthenics Power + Strength + Kettlebell (1 hour)
// ============================================================

const fridayWorkout: WorkoutDay = {
  day: 'Friday',
  type: 'intensive',
  title: 'Calisthenics + KB — Power & Strength',
  warmup: '10 min: jump rope 3 min + dynamic mobility (leg swings, arm circles, world\'s greatest stretch)',
  format: '60 min session.\n\nBlock A — Power (15 min): 5 rounds, 45s rest between exercises, 2 min between rounds\nBlock B — Strength (30 min): 4 rounds, controlled tempo, 90s rest between exercises\nBlock C — Finisher (10 min): AMRAP — as many quality rounds as possible',
  exercises: [
    {
      id: v4Gen(), name: '[A] Explosive Push-ups', weight: 'Bodyweight', reps: '6-8 reps', sets: 5, notes: 'Block A — max power per rep',
      variations: [
        { name: 'Clapping Push-ups', reps: '5 reps' },
        { name: 'Plyo Box Push-ups', reps: '8 reps' },
      ],
    },
    {
      id: v4Gen(), name: '[A] KB Swing', weight: '24 kg', reps: '15 reps', sets: 5, notes: 'Block A — explosive hip hinge',
      variations: [
        { name: 'Single-arm KB Swing', weight: '20 kg', reps: '10 per side' },
        { name: 'KB Snatch', weight: '20 kg', reps: '8 per side' },
      ],
    },
    {
      id: v4Gen(), name: '[A] Box Jumps', weight: 'Bodyweight', reps: '8 reps', sets: 5, notes: 'Block A — step down for safety',
      variations: [
        { name: 'Broad Jumps', reps: '6 reps' },
        { name: 'Tuck Jumps', reps: '8 reps' },
      ],
    },
    {
      id: v4Gen(), name: '[B] Weighted Pull-ups', weight: '+8 kg KB', reps: '5 reps', sets: 4, notes: 'Block B — strict form',
      variations: [
        { name: 'Pull-ups', reps: '6-8 reps' },
        { name: 'Archer Pull-ups', reps: '4 per side' },
        { name: 'Chin-ups', reps: '8 reps' },
      ],
    },
    {
      id: v4Gen(), name: '[B] Double KB Front Squat', weight: '20 kg each', reps: '8 reps', sets: 4, notes: 'Block B — full depth, upright torso',
      variations: [
        { name: 'KB Goblet Squat', weight: '28 kg', reps: '10 reps' },
        { name: 'Bulgarian Split Squat', weight: '16 kg each', reps: '8 per side' },
      ],
    },
    {
      id: v4Gen(), name: '[B] Ring Dips', weight: 'Bodyweight', reps: '6-8 reps', sets: 4, notes: 'Block B — full ROM, rings turned out',
      variations: [
        { name: 'Bar Dips', reps: '8-10 reps' },
        { name: 'Weighted Dips', weight: '+8 kg', reps: '5 reps' },
      ],
    },
    {
      id: v4Gen(), name: '[B] KB Clean & Press', weight: '20 kg', reps: '5 per side', sets: 4, notes: 'Block B — strict press',
      variations: [
        { name: 'KB Push Press', weight: '24 kg', reps: '5 per side' },
        { name: 'Double KB Press', weight: '16 kg each', reps: '6 reps' },
      ],
    },
    {
      id: v4Gen(), name: '[B] Pistol Squat Progression', weight: 'Bodyweight', reps: '5 per side', sets: 4, notes: 'Block B — assisted if needed',
      variations: [
        { name: 'Shrimp Squat', reps: '4 per side' },
        { name: 'Skater Squat', reps: '6 per side' },
      ],
    },
    {
      id: v4Gen(), name: '[C] Finisher AMRAP', weight: 'Mixed', duration: '10 minutes', sets: 1, notes: 'Block C — as many rounds as possible:\n• 5 Pull-ups\n• 10 Push-ups\n• 15 KB Swings (20 kg)\n• 20 Air Squats',
      variations: [
        { name: 'AMRAP — Lighter', notes: '5 Australian Rows / 10 Incline Push-ups / 15 KB Swings (16 kg) / 20 Squats' },
        { name: 'AMRAP — Harder', notes: '5 Muscle-ups (or pull-up + dip) / 10 Plyo Push-ups / 15 KB Snatches / 20 Jump Squats' },
      ],
    },
  ],
  cooldown: '5 min full-body stretch: hips, shoulders, t-spine',
  notes: 'Hardest session of the week. Fuel well beforehand.',
};

// ============================================================
// SATURDAY — Swimming Long Aerobic (rotates across weeks)
// ============================================================

const saturdayLongSwims: { title: string; format: string; notes: string }[] = [
  {
    title: 'Sat Swim — 4 × 400m Aerobic',
    format: 'Long aerobic freestyle.\n\nWarm-up: 300m easy\n\nMain set: 4 × 400m freestyle @ 75% effort\n• Rest: 45s between reps\n• Even pacing across all 4\n\nCool-down: 200m easy\nTotal: ~2100m',
    notes: 'Comfortably hard aerobic work. Smooth, long strokes.',
  },
  {
    title: 'Sat Swim — Continuous 2000m',
    format: 'Pure aerobic base.\n\nWarm-up: 200m easy\n\nMain set: 2000m continuous freestyle @ 70% effort\n• Vary breathing pattern every 200m (3/5/3/5)\n• Maintain rhythm and stroke length\n\nCool-down: 200m easy\nTotal: ~2400m',
    notes: 'Mental endurance + aerobic capacity. Settle into a meditative rhythm.',
  },
  {
    title: 'Sat Swim — 6 × 300m',
    format: 'Aerobic threshold builder.\n\nWarm-up: 300m easy\n\nMain set: 6 × 300m freestyle @ 75-80%\n• Rest: 30s between\n• Hold pace across all 6\n\nCool-down: 200m easy\nTotal: ~2300m',
    notes: 'Sustained moderate-hard aerobic effort.',
  },
  {
    title: 'Sat Swim — Long Pyramid',
    format: 'Ladder up and down.\n\nWarm-up: 300m easy\n\nMain set:\n• 200m / 30s rest\n• 400m / 45s rest\n• 600m / 60s rest\n• 400m / 45s rest\n• 200m / 30s rest\nAll @ 75% effort\n\nCool-down: 200m easy\nTotal: ~2300m',
    notes: 'Negative-split each leg if possible.',
  },
  {
    title: 'Sat Swim — 3 × 800m',
    format: 'Long-distance aerobic.\n\nWarm-up: 300m easy\n\nMain set: 3 × 800m freestyle @ 75%\n• Rest: 60s between\n\nCool-down: 200m easy\nTotal: ~2900m',
    notes: 'Big aerobic day. Pace conservatively on the first 800.',
  },
  {
    title: 'Sat Swim — 10 × 200m',
    format: 'Aerobic volume.\n\nWarm-up: 300m easy\n\nMain set: 10 × 200m freestyle @ 75%\n• Rest: 20s between\n\nCool-down: 200m easy\nTotal: ~2500m',
    notes: 'Short rests keep the heart rate up. Steady throughout.',
  },
  {
    title: 'Sat Swim — Broken 1500m Time Trial',
    format: 'Race simulation.\n\nWarm-up: 300m easy\n\nMain set: Broken 1500m\n• 500m strong, 30s rest\n• 500m strong, 30s rest\n• 500m strong\n→ Sum total time for benchmark\n\nCool-down: 300m easy\nTotal: ~2100m',
    notes: 'Benchmark workout — track total time across cycles.',
  },
  {
    title: 'Sat Swim — Aerobic 2500m Mixed',
    format: 'Mixed aerobic volume.\n\nWarm-up: 300m easy\n\nMain set:\n• 800m @ 75%, 60s rest\n• 4 × 200m @ 78%, 30s rest\n• 400m @ 75%, 60s rest\n• 4 × 100m @ 80%, 20s rest\n\nCool-down: 200m easy\nTotal: ~2700m',
    notes: 'Biggest aerobic day of the cycle.',
  },
  // Week 9 deload variant
  {
    title: 'Sat Swim — Easy Aerobic (Deload)',
    format: 'Deload week.\n\n• 300m easy warm-up\n• 4 × 200m freestyle @ 60% effort, 45s rest\n• 200m cool-down\nTotal: ~1300m',
    notes: 'Recovery only. Keep effort easy.',
  },
];

// ============================================================
// SUNDAY — Rest
// ============================================================

const sundayWorkout: WorkoutDay = {
  day: 'Sunday',
  type: 'rest',
  title: 'Complete Rest',
  exercises: [],
  notes: 'Full recovery day. Light walk or stretching if desired.',
};

// ============================================================
// Deload Week (Week 9)
// ============================================================

function buildDeloadWeek(): WorkoutDay[] {
  return [
    {
      day: 'Monday',
      type: 'recovery',
      title: 'Deload — Easy Erg + Mobility',
      format: '30 min easy row @ 60% effort (Zone 2).\nFollow with 15 min full-body mobility flow.',
      exercises: [],
      notes: 'Deload week — all sessions easy and short.',
    },
    {
      day: 'Tuesday',
      type: 'recovery',
      title: 'Deload — Light Calisthenics',
      format: '2 rounds, controlled, 50% normal volume, 60s rest between exercises.',
      exercises: [
        {
          id: v4Gen(), name: 'Push-ups', weight: 'Bodyweight', reps: '6-8 reps', sets: 2,
          variations: [{ name: 'Incline Push-ups', reps: '10 reps' }],
        },
        {
          id: v4Gen(), name: 'Bodyweight Squats', weight: 'Bodyweight', reps: '10 reps', sets: 2,
          variations: [{ name: 'Wall Sit', duration: '30s' }],
        },
        {
          id: v4Gen(), name: 'Australian Rows', weight: 'Bodyweight', reps: '8 reps', sets: 2,
          variations: [{ name: 'Negative Pull-ups', reps: '3 reps' }],
        },
        {
          id: v4Gen(), name: 'Plank', weight: 'Bodyweight', duration: '30 seconds', sets: 2,
          variations: [{ name: 'Dead Bug', reps: '8 per side' }],
        },
      ],
      notes: 'Move well, stop well short of failure.',
    },
    {
      day: 'Wednesday',
      type: 'recovery',
      title: 'Deload — Easy Swim',
      format: '30 min very easy freestyle.\n• 200m warm-up\n• 4 × 200m @ 60%, 60s rest\n• 200m cool-down\nTotal: ~1200m',
      exercises: [],
      notes: 'Smooth and easy. No intensity.',
    },
    {
      day: 'Thursday',
      type: 'recovery',
      title: 'Deload — Active Recovery (45 min)',
      format: '20 min easy walk + 20 min full-body stretch + 5 min breathwork.\nKeep HR < 120 bpm.',
      exercises: [],
      notes: 'Low and slow. Recharge.',
    },
    {
      day: 'Friday',
      type: 'recovery',
      title: 'Deload — Light Calisthenics + KB',
      format: '30 min total. 2 rounds, 50% normal loads, controlled tempo.',
      exercises: [
        {
          id: v4Gen(), name: 'KB Goblet Squat', weight: '12 kg', reps: '10 reps', sets: 2,
          variations: [{ name: 'Bodyweight Squat', reps: '15 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Press', weight: '12 kg', reps: '6 per side', sets: 2,
          variations: [{ name: 'Push-ups', reps: '8 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Row', weight: '12 kg', reps: '8 per side', sets: 2,
          variations: [{ name: 'Australian Row', reps: '10 reps' }],
        },
        {
          id: v4Gen(), name: 'KB Romanian Deadlift', weight: '16 kg', reps: '10 reps', sets: 2,
          variations: [{ name: 'Glute Bridge', reps: '12 reps' }],
        },
      ],
      notes: 'Easy session — leave plenty in the tank.',
    },
    {
      day: 'Saturday',
      type: 'recovery',
      title: saturdayLongSwims[8].title,
      format: saturdayLongSwims[8].format,
      exercises: [],
      notes: saturdayLongSwims[8].notes,
    },
    sundayWorkout,
  ];
}

// ============================================================
// Week builder
// ============================================================

function buildRegularWeek(weekIndex: number): WorkoutDay[] {
  // Monday — rotating erg session
  const erg = mondayErgSessions[weekIndex % mondayErgSessions.length];
  const mondayDay: WorkoutDay = {
    day: 'Monday',
    type: 'intensive',
    title: erg.title,
    format: erg.format,
    exercises: [],
    notes: erg.notes,
  };

  // Tuesday — fixed calisthenics maintenance (clone exercises with fresh ids)
  const tuesdayDay: WorkoutDay = {
    ...tuesdayWorkout,
    exercises: tuesdayWorkout.exercises.map(ex => ({
      ...ex,
      id: v4Gen(),
      variations: [...ex.variations],
    })),
  };

  // Wednesday — rotating swim HIIT
  const wedSwim = wednesdayHIITSwims[weekIndex % wednesdayHIITSwims.length];
  const wednesdayDay: WorkoutDay = {
    day: 'Wednesday',
    type: 'intensive',
    title: wedSwim.title,
    format: wedSwim.format,
    exercises: [],
    notes: wedSwim.notes,
  };

  // Thursday — fixed active recovery
  const thursdayDay: WorkoutDay = { ...thursdayWorkout };

  // Friday — fixed calisthenics + kb (clone exercises with fresh ids)
  const fridayDay: WorkoutDay = {
    ...fridayWorkout,
    exercises: fridayWorkout.exercises.map(ex => ({
      ...ex,
      id: v4Gen(),
      variations: [...ex.variations],
    })),
  };

  // Saturday — rotating long aerobic swim (only first 8 in regular weeks)
  const satSwim = saturdayLongSwims[weekIndex % 8];
  const saturdayDay: WorkoutDay = {
    day: 'Saturday',
    type: 'recovery',
    title: satSwim.title,
    format: satSwim.format,
    exercises: [],
    notes: satSwim.notes,
  };

  return [mondayDay, tuesdayDay, wednesdayDay, thursdayDay, fridayDay, saturdayDay, sundayWorkout];
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
    description: 'Erg • Calisthenics • Swim HIIT • Active Recovery • KB Power • Long Swim (9-week cycle)',
    totalWeeks,
    startWeight: 105,
    goalWeight: 90,
    daysPerWeek: 6,
    weeks: weekDays.map((days, i) => ({ weekNumber: i + 1, days })),
    createdAt: new Date().toISOString(),
  };
}
