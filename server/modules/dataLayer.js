import axios from 'axios';
import { Car } from './schema';

const DATAMUSE_API_URI = 'https://api.datamuse.com/words?rel_rhy';

export const getCars = () => Car.find();

export const getCar = id => Car.find({_id: id});

export const addCar = ({ colour, make, model, year }) => {
  let words_model = '';
  if (model) {
    words_model = model.replace(/[0-9]/g, '').trim();
  }

  return getRhymes(words_model)
    .then((response) => {
      const rhymes = response.data;
      let words = [];
      if (rhymes) {
        words = rhymes.map((rhyme) => rhyme.word).join(' ');
      }
      const car = new Car({ make, model, colour, year, words });
      return car.save();
    });
  
};

export const getMakeAndModel = (make, model) => {
  
  return new Promise((resolve, reject) => {
    Car.find({make, model})
    .then((response) => {
      const result = response.reduce((h, {model, year, make, colour, words}) => {
        return Object.assign(h, { [make]:( h[make] || [] ).concat({model, year, colour, words})})
      }, {});
      resolve(result);
    })
    .catch(err => {
      reject(err);
    })
  });
  
};

export const getRhymes = model => {

  return axios.get(`${DATAMUSE_API_URI}=${model}`);
}

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