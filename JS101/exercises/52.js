// HOW MANY?
//
// Write a function that counts the number of occurences of each element in a
// given array. Once counted, log each element alongside the number of
// occurences. Consider the words case sensitive e.g. ("suv" !== "SUV).

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  const vehicleObj = {};
  vehicles.forEach(vehicle => {
    vehicleObj[vehicle] = vehicleObj[vehicle] + 1 || 1;
  });
  for (const key in vehicleObj) {
    console.log(`${key} => ${vehicleObj[key]}`);
  }
}

countOccurrences(vehicles);