function carRenting(cars, distance) {
  if (!Array.isArray(cars) || cars.length === 0) {
    return null
  }

  let result = [];

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const maxDistance = (car.fuelAmount / car.avgConsumption) * 100

    if (maxDistance >= distance) {
      result.push(car.type)
    }
  }

  return result.length > 0 ? result : null;
}

module.exports = carRenting