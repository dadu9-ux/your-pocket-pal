import { WorkoutPlan, PlanProgress, WeekProgress, DayProgress } from '@/types/workout';
import { createDefaultPlan } from '@/data/defaultPlan';

const PLAN_KEY = 'kp_plans';
const PROGRESS_KEY = 'kp_progress';
const ACTIVE_PLAN_KEY = 'kp_active_plan';

export function getPlans(): WorkoutPlan[] {
  const raw = localStorage.getItem(PLAN_KEY);
  if (!raw) {
    const defaultPlan = createDefaultPlan();
    savePlans([defaultPlan]);
    return [defaultPlan];
  }
  return JSON.parse(raw);
}

export function savePlans(plans: WorkoutPlan[]) {
  localStorage.setItem(PLAN_KEY, JSON.stringify(plans));
}

export function getActivePlanId(): string {
  const id = localStorage.getItem(ACTIVE_PLAN_KEY);
  if (!id) {
    const plans = getPlans();
    if (plans.length > 0) {
      setActivePlanId(plans[0].id);
      return plans[0].id;
    }
  }
  return id || '';
}

export function setActivePlanId(id: string) {
  localStorage.setItem(ACTIVE_PLAN_KEY, id);
}

export function getActivePlan(): WorkoutPlan | null {
  const plans = getPlans();
  const activeId = getActivePlanId();
  return plans.find(p => p.id === activeId) || plans[0] || null;
}

export function addPlan(plan: WorkoutPlan) {
  const plans = getPlans();
  plans.push(plan);
  savePlans(plans);
  setActivePlanId(plan.id);
}

export function deletePlan(planId: string) {
  let plans = getPlans();
  plans = plans.filter(p => p.id !== planId);
  savePlans(plans);
  // Remove progress too
  const allProgress = getAllProgress();
  delete allProgress[planId];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  if (getActivePlanId() === planId && plans.length > 0) {
    setActivePlanId(plans[0].id);
  }
}

function getAllProgress(): Record<string, PlanProgress> {
  const raw = localStorage.getItem(PROGRESS_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function getProgress(planId: string): PlanProgress {
  const all = getAllProgress();
  if (!all[planId]) {
    all[planId] = { planId, weeks: [], bodyWeight: [], measurements: [] };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
  }
  return all[planId];
}

export function saveProgress(progress: PlanProgress) {
  const all = getAllProgress();
  all[progress.planId] = progress;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
}

export function getDayProgress(planId: string, weekNumber: number, day: string): DayProgress | undefined {
  const progress = getProgress(planId);
  const week = progress.weeks.find(w => w.weekNumber === weekNumber);
  return week?.days.find(d => d.day === day);
}

export function saveDayProgress(planId: string, weekNumber: number, dayProgress: DayProgress) {
  const progress = getProgress(planId);
  let week = progress.weeks.find(w => w.weekNumber === weekNumber);
  if (!week) {
    week = { weekNumber, days: [] };
    progress.weeks.push(week);
  }
  const idx = week.days.findIndex(d => d.day === dayProgress.day);
  if (idx >= 0) {
    week.days[idx] = dayProgress;
  } else {
    week.days.push(dayProgress);
  }
  saveProgress(progress);
}

export function getLastCompletedWeek(planId: string): number {
  const progress = getProgress(planId);
  let lastWeek = 1;
  for (const week of progress.weeks) {
    const hasCompleted = week.days.some(d => d.completed);
    if (hasCompleted && week.weekNumber >= lastWeek) {
      lastWeek = week.weekNumber;
    }
  }
  return lastWeek;
}

export function getTotalCompletedWorkouts(planId: string, totalWeeks: number): number {
  const progress = getProgress(planId);
  let count = 0;
  for (const week of progress.weeks) {
    count += week.days.filter(d => d.completed).length;
  }
  return count;
}

export function getWeekCompletedCount(planId: string, weekNumber: number): number {
  const progress = getProgress(planId);
  const week = progress.weeks.find(w => w.weekNumber === weekNumber);
  return week ? week.days.filter(d => d.completed).length : 0;
}
