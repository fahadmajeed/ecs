import { generate } from 'short-uuid';

let _cars = [];

export const getCars = () => _cars;

export const getCar = id => _cars.find(car => car.id === id);

export const findByMakeAndModel = (make, model, year) => _cars.find(car => car.make === make &&
  car.model === model && car.year === year);

export const addCar = ({ colour, make, model, year }) => {
  const exists = findByMakeAndModel(make, model, year);

  if (!exists) {
    const car = {id: generate(), make, model, colour, year};
    _cars.push(car);

    return true;
  } else {

    return false;
  }
};

export const setCar = updatedCar => {
    const targetIndex = _cars.findIndex(car => car.id === updatedCar.id)
    if (targetIndex >= 0) {
      _cars[targetIndex] = updatedCar;
      return true;
    } else {
      return false;
    }
};

export const removeCar = id => {
  const exists = getCar(id);
  if (!exists) {
    return false;
  }
  _cars = _cars.filter(car => car.id === id);
  return `Car with make ${exists.make} and model ${exists.model} with ID ${exists.id} deleted`;
}