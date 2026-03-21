import { useState, useEffect, useCallback } from 'react';
import { WorkoutPlan, DayProgress, ExerciseProgress } from '@/types/workout';
import {
  getPlans, getActivePlan, getActivePlanId, setActivePlanId,
  getLastCompletedWeek, getTotalCompletedWorkouts, getWeekCompletedCount,
  getDayProgress, saveDayProgress, deletePlan, getProgress, saveProgress,
} from '@/lib/storage';
import HeroBanner from '@/components/HeroBanner';
import StatsGrid from '@/components/StatsGrid';
import WeekSelector from '@/components/WeekSelector';
import WorkoutDayCard from '@/components/WorkoutDayCard';
import PlanSwitcher from '@/components/PlanSwitcher';
import CreatePlanModal from '@/components/CreatePlanModal';
import { Dumbbell, BarChart3, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'workout' | 'plans' | 'progress';

export default function Index() {
  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [tab, setTab] = useState<Tab>('workout');
  const [showCreate, setShowCreate] = useState(false);
  const [, forceUpdate] = useState(0);

  const reload = useCallback(() => {
    const allPlans = getPlans();
    setPlans(allPlans);
    const active = getActivePlan();
    setPlan(active);
    if (active) {
      const lastWeek = getLastCompletedWeek(active.id);
      setCurrentWeek(lastWeek);
    }
    forceUpdate(n => n + 1);
  }, []);

  useEffect(() => { reload(); }, [reload]);

  if (!plan) return null;

  const week = plan.weeks.find(w => w.weekNumber === currentWeek);
  const totalWorkouts = plan.totalWeeks * plan.daysPerWeek;
  const completed = getTotalCompletedWorkouts(plan.id, plan.totalWeeks);
  const progress = getProgress(plan.id);
  const currentBodyWeight = progress.bodyWeight.length > 0
    ? progress.bodyWeight[progress.bodyWeight.length - 1].weight
    : plan.startWeight;

  function handleToggleComplete(day: string, isCompleted: boolean) {
    const existing = getDayProgress(plan!.id, currentWeek, day);
    const dayProg: DayProgress = existing || { day, completed: false, exercises: [] };
    dayProg.completed = isCompleted;
    saveDayProgress(plan!.id, currentWeek, dayProg);
    forceUpdate(n => n + 1);
  }

  function handleExerciseUpdate(day: string, exerciseId: string, exProgress: ExerciseProgress) {
    const existing = getDayProgress(plan!.id, currentWeek, day);
    const dayProg: DayProgress = existing || { day, completed: false, exercises: [] };
    const idx = dayProg.exercises.findIndex(e => e.exerciseId === exerciseId);
    if (idx >= 0) {
      dayProg.exercises[idx] = exProgress;
    } else {
      dayProg.exercises.push(exProgress);
    }
    saveDayProgress(plan!.id, currentWeek, dayProg);
    forceUpdate(n => n + 1);
  }

  function handleNotesChange(day: string, notes: string) {
    const existing = getDayProgress(plan!.id, currentWeek, day);
    const dayProg: DayProgress = existing || { day, completed: false, exercises: [] };
    dayProg.workoutNotes = notes;
    saveDayProgress(plan!.id, currentWeek, dayProg);
  }

  function handleSelectPlan(planId: string) {
    setActivePlanId(planId);
    reload();
    setTab('workout');
  }

  function handleDeletePlan(planId: string) {
    if (plans.length <= 1) return;
    deletePlan(planId);
    reload();
  }

  function handleBodyWeightSave(weight: number) {
    const prog = getProgress(plan!.id);
    prog.bodyWeight.push({ date: new Date().toISOString(), weight });
    saveProgress(prog);
    forceUpdate(n => n + 1);
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroBanner planName={plan.name} description={plan.description} />

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom z-40">
        <div className="flex">
          {([
            { id: 'workout' as Tab, icon: Dumbbell, label: 'Workout' },
            { id: 'plans' as Tab, icon: Settings, label: 'Plans' },
            { id: 'progress' as Tab, icon: BarChart3, label: 'Progress' },
          ]).map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                'flex-1 flex flex-col items-center py-3 gap-1 transition-colors',
                tab === t.id ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <t.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {tab === 'workout' && (
        <>
          <div className="mt-4">
            <StatsGrid
              currentWeek={currentWeek}
              completedWorkouts={completed}
              totalWorkouts={totalWorkouts}
              currentWeight={currentBodyWeight}
              goalWeight={plan.goalWeight}
            />
          </div>

          <WeekSelector
            totalWeeks={plan.totalWeeks}
            currentWeek={currentWeek}
            onSelectWeek={setCurrentWeek}
            getWeekCompletion={(w) => getWeekCompletedCount(plan.id, w)}
          />

          <div className="px-4 mt-4 space-y-3">
            {week?.days.map(day => (
              <WorkoutDayCard
                key={day.day}
                day={day}
                weekNumber={currentWeek}
                dayProgress={getDayProgress(plan.id, currentWeek, day.day)}
                onToggleComplete={handleToggleComplete}
                onExerciseUpdate={(exId, p) => handleExerciseUpdate(day.day, exId, p)}
                onNotesChange={handleNotesChange}
              />
            ))}
          </div>
        </>
      )}

      {tab === 'plans' && (
        <>
          <PlanSwitcher
            plans={plans}
            activePlanId={getActivePlanId()}
            onSelect={handleSelectPlan}
            onDelete={handleDeletePlan}
            onCreateNew={() => setShowCreate(true)}
          />
          {completed >= totalWorkouts && (
            <div className="mx-4 mt-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
              <p className="text-sm font-semibold text-primary">🎉 Plan Complete!</p>
              <p className="text-xs text-muted-foreground mt-1">You've finished all workouts. Create a new plan to keep progressing!</p>
              <button
                onClick={() => setShowCreate(true)}
                className="mt-3 gradient-intensive text-primary-foreground px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider"
              >
                Create Next Plan
              </button>
            </div>
          )}
        </>
      )}

      {tab === 'progress' && (
        <div className="px-4 mt-4 space-y-4">
          {/* Body weight tracking */}
          <div className="bg-card rounded-xl p-4 shadow-card">
            <h3 className="font-display text-sm text-muted-foreground mb-3">Body Weight</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-[10px] text-muted-foreground">Start</p>
                <p className="text-lg font-bold text-foreground">{plan.startWeight || '—'}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Current</p>
                <p className="text-lg font-bold text-primary">{currentBodyWeight || '—'}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Goal</p>
                <p className="text-lg font-bold text-foreground">{plan.goalWeight || '—'}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <input
                type="number"
                placeholder="Log weight (kg)"
                id="weight-input"
                className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={() => {
                  const input = document.getElementById('weight-input') as HTMLInputElement;
                  if (input.value) {
                    handleBodyWeightSave(Number(input.value));
                    input.value = '';
                  }
                }}
                className="gradient-intensive text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold"
              >
                Save
              </button>
            </div>
            {progress.bodyWeight.length > 0 && (
              <div className="mt-3 space-y-1 max-h-32 overflow-y-auto">
                {[...progress.bodyWeight].reverse().slice(0, 5).map((entry, i) => (
                  <div key={i} className="flex justify-between text-xs text-muted-foreground">
                    <span>{new Date(entry.date).toLocaleDateString()}</span>
                    <span className="text-foreground font-medium">{entry.weight} kg</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Week by week progress */}
          <div className="bg-card rounded-xl p-4 shadow-card">
            <h3 className="font-display text-sm text-muted-foreground mb-3">Weekly Progress</h3>
            <div className="space-y-2">
              {Array.from({ length: plan.totalWeeks }, (_, i) => i + 1).map(w => {
                const count = getWeekCompletedCount(plan.id, w);
                const pct = (count / plan.daysPerWeek) * 100;
                return (
                  <div key={w} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-8">W{w}</span>
                    <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                      <div className="h-full gradient-intensive rounded-full transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground w-6">{count}/{plan.daysPerWeek}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {showCreate && (
        <CreatePlanModal
          onClose={() => setShowCreate(false)}
          onCreated={() => { setShowCreate(false); reload(); setTab('workout'); }}
        />
      )}
    </div>
  );
}
