export function sample<T>(array?: Array<T>) {
  if (!array) {
    return undefined;
  }
  return array[Math.floor(Math.random() * array.length)];
}
