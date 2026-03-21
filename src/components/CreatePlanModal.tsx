import { useState } from 'react';
import { WorkoutPlan, WorkoutDay } from '@/types/workout';
import { v4Gen } from '@/lib/idgen';
import { addPlan } from '@/lib/storage';
import { X, Plus, Trash2 } from 'lucide-react';

interface CreatePlanModalProps {
  onClose: () => void;
  onCreated: (plan: WorkoutPlan) => void;
}

interface DayForm {
  day: string;
  type: 'intensive' | 'recovery' | 'rest';
  title: string;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function CreatePlanModal({ onClose, onCreated }: CreatePlanModalProps) {
  const [name, setName] = useState('');
  const [totalWeeks, setTotalWeeks] = useState(12);
  const [startWeight, setStartWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [days, setDays] = useState<DayForm[]>([
    { day: 'Monday', type: 'intensive', title: '' },
    { day: 'Wednesday', type: 'intensive', title: '' },
    { day: 'Friday', type: 'intensive', title: '' },
  ]);

  function handleCreate() {
    if (!name.trim()) return;

    const weekDays: WorkoutDay[] = DAYS.map(dayName => {
      const config = days.find(d => d.day === dayName);
      if (config) {
        return {
          day: dayName,
          type: config.type,
          title: config.title || `${config.type.charAt(0).toUpperCase() + config.type.slice(1)} Workout`,
          exercises: [],
        };
      }
      return {
        day: dayName,
        type: 'rest' as const,
        title: 'Rest Day',
        exercises: [],
        notes: 'Recovery day. Light stretching if needed.',
      };
    });

    const plan: WorkoutPlan = {
      id: v4Gen(),
      name,
      description: startWeight && goalWeight ? `${startWeight} kg → ${goalWeight} kg` : 'Custom Plan',
      totalWeeks,
      startWeight: startWeight ? Number(startWeight) : undefined,
      goalWeight: goalWeight ? Number(goalWeight) : undefined,
      daysPerWeek: days.filter(d => d.type !== 'rest').length,
      weeks: Array.from({ length: totalWeeks }, (_, i) => ({
        weekNumber: i + 1,
        days: weekDays.map(d => ({
          ...d,
          exercises: d.exercises.map(e => ({ ...e, id: v4Gen() })),
        })),
      })),
      createdAt: new Date().toISOString(),
    };

    addPlan(plan);
    onCreated(plan);
  }

  function addDay() {
    const usedDays = days.map(d => d.day);
    const nextDay = DAYS.find(d => !usedDays.includes(d));
    if (nextDay) {
      setDays([...days, { day: nextDay, type: 'intensive', title: '' }]);
    }
  }

  function removeDay(index: number) {
    setDays(days.filter((_, i) => i !== index));
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
      <div className="bg-card w-full rounded-t-2xl max-h-[90vh] overflow-y-auto safe-bottom">
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <h2 className="font-display text-lg">Create New Plan</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Plan Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Kettlebell Strength Phase 2"
              className="w-full bg-secondary rounded-lg px-3 py-2.5 text-sm mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Weeks</label>
              <input
                type="number"
                value={totalWeeks}
                onChange={e => setTotalWeeks(Number(e.target.value))}
                min={1}
                max={52}
                className="w-full bg-secondary rounded-lg px-3 py-2.5 text-sm mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Start kg</label>
              <input
                type="number"
                value={startWeight}
                onChange={e => setStartWeight(e.target.value)}
                placeholder="105"
                className="w-full bg-secondary rounded-lg px-3 py-2.5 text-sm mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Goal kg</label>
              <input
                type="number"
                value={goalWeight}
                onChange={e => setGoalWeight(e.target.value)}
                placeholder="90"
                className="w-full bg-secondary rounded-lg px-3 py-2.5 text-sm mt-1 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Training Days</label>
              <button onClick={addDay} className="text-primary text-xs flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Day
              </button>
            </div>
            <div className="space-y-2 mt-2">
              {days.map((d, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <select
                    value={d.day}
                    onChange={e => {
                      const updated = [...days];
                      updated[i] = { ...d, day: e.target.value };
                      setDays(updated);
                    }}
                    className="bg-secondary rounded-lg px-2 py-2 text-sm flex-1 focus:outline-none"
                  >
                    {DAYS.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    value={d.type}
                    onChange={e => {
                      const updated = [...days];
                      updated[i] = { ...d, type: e.target.value as any };
                      setDays(updated);
                    }}
                    className="bg-secondary rounded-lg px-2 py-2 text-sm w-28 focus:outline-none"
                  >
                    <option value="intensive">Intensive</option>
                    <option value="recovery">Recovery</option>
                    <option value="rest">Rest</option>
                  </select>
                  <button onClick={() => removeDay(i)} className="p-1 text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="w-full gradient-intensive text-primary-foreground py-3 rounded-xl font-display text-sm uppercase tracking-wider disabled:opacity-50"
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
}
