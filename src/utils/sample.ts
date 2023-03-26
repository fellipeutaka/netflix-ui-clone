export function sample<T>(array?: T[]) {
  if (!array) {
    return undefined;
  }
  return array[Math.floor(Math.random() * array.length)];
}
