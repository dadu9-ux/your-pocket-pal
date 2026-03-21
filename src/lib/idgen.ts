let counter = 0;
export function v4Gen(): string {
  counter++;
  return `id-${Date.now()}-${counter}-${Math.random().toString(36).slice(2, 9)}`;
}
