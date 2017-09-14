export default function (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Invalid Parameters')
  }

  return x + y
}