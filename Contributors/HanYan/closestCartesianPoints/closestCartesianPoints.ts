type CoordinatePair = [[number, number], [number, number]];

export function closestCartesianPoints(pointsArr: [number, number][]): CoordinatePair {
  const closestPoints: CoordinatePair = [[0,0], [0,0]];
  let closestDistance = Infinity;
  let distance: number;

  pointsArr.forEach((coors, index) => {
    // each coordinate, measure against all coordinates AFTER it
    pointsArr.slice(index+1).forEach((coors2) => {
      distance = findDistance(coors, coors2);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPoints[0] = coors;
        closestPoints[1] = coors2;
      }
    })
  })

  return closestPoints;
}


export function findDistance(coors1: [number, number], coors2: [number, number]): number {
  // Pythagorean theorem
  return Math.sqrt((coors1[0]-coors2[0])**2 + (coors1[1]-coors2[1])**2);
}