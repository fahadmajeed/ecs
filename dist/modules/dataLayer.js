var _this = this;

import { shortUUID } from 'short-uuid';

const CarsData = {
  _cars: [],
  getCars: () => _this._cars,
  getCar: id => _this._cars.find(car => car.id === id),
  findByMakeAndModel: (make, model) => _this._cars.find(car => car.make === make && car.model === model),
  addCar: reqBody => {
    const { colour, make, model, year } = reqBody;
    const exists = _this.findByMakeAndModel(make, model);
    if (!exists) {
      const car = { id: shortUUID.generate, make, model, colour, year };
      _this._cars.push(car);
      return true;
    } else {
      return false;
    }
  },
  setCar: updatedCar => {
    const targetIndex = _this._cars.findIndex(car => car.id === updatedCar.id);
    if (targetIndex >= 0) {
      _this._cars[targetIndex] = updatedCar;
      return true;
    } else {
      return false;
    }
  },
  removeCar: id => {
    const exists = _this.getCar(id);
    if (!exists) {
      return 'No such car exists';
    }
    _this._cars = _this._cars.filter(car => car.id === id);
    return 'Car deleted';
  }

  // Disallow new properties on our object
};Object.freeze(CarsData);

export default CarsData;
//# sourceMappingURL=dataLayer.js.map