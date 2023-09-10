function analyzeCarMileage(cars) {
  const output = cars.reduce(
    (acc, car) => {
      acc.highestMileageCar =
        acc.highestMileageCar.mileage > car.mileage
          ? acc.highestMileageCar
          : car;
      acc.lowestMileageCar =
        acc.lowestMileageCar.mileage < car.mileage ? acc.lowestMileageCar : car;
      acc.totalMileage = acc.totalMileage + car.mileage;
      return acc;
    },
    {
      highestMileageCar: {},
      lowestMileageCar: {},
      totalMileage: 0,
    }
  );

  output.averageMileage = Number(
    (output.totalMileage / cars.length).toFixed(2)
  );

  return output;
}

const cars = [
  { make: "Toyota", model: "Camry", year: 2020, mileage: 30800.22 },
  { make: "Honda", model: "Civic", year: 2019, mileage: 32000.12 },
  { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
  { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
  { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];

const result = analyzeCarMileage(cars);

console.log(result);
module.exports = analyzeCarMileage;
