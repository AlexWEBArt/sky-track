export function getClosestIndex(
  path: [number, number][],
  current: [number, number]
) {
  let minDist = Infinity;
  let minIdx = 0;
  path.forEach((pt, idx) => {
    const dist = Math.hypot(pt[0] - current[0], pt[1] - current[1]);
    if (dist < minDist) {
      minDist = dist;
      minIdx = idx;
    }
  });
  return minIdx;
}
