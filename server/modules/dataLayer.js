import { Car } from './schema';

export const getCars = () => Car.find();

export const getCar = id => Car.find({_id: id});

export const addCar = ({ colour, make, model, year }) => {
  const car = new Car({ make, model, colour, year });

  return car.save();
};

export const setCar = updatedCar => {
  const query = {'_id': updatedCar._id};

  return new Promise((resolve, reject) => {
    Car.findOneAndUpdate(query, updatedCar, {upsert: true}, function(err, doc) {
      if (err) reject(err);
      resolve(`Car ${updatedCar.make}, ${updatedCar.model} succesfully updated.`);
    });
  });
};

export const removeCar = id => {
  return Car.findByIdAndRemove(id);
}