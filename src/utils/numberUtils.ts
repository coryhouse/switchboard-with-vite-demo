// Returns a random integer below the provided number
export function getRandomNumberBelow(maxNumber: number) {
  return Math.floor(Math.random() * maxNumber) + 1;
}
