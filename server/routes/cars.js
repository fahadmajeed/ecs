import express from 'express';
import axios from 'axios';
import * as CarsData from '../modules/dataLayer';

const router = express.Router();

router.get('/', (req, res) => {

  CarsData.getCars()
  .then(cars => {
    res.status(200).json(
      cars
    );
  });
 
});

router.get('/:id', (req, res) => {

  CarsData.getCar(req.params.id)
  .then(car => {
    res.status(200).json(
      car
    );
  });
 
});

router.post('/', (req, res) => {
  
  CarsData.addCar(req.body).then(result => {
    res.status(201).json({message: 'Car Successfully added!'});
  })
  .catch(err => {
    res.status(422).json({error: err});
  });

});

router.put('/', (req, res) => {
  CarsData.setCar(req.body)
  .then(msg => {
    res.status(200).send({message: msg})
  })
  .catch(err => {
    console.log('err', err);
    res.status(500).send({error: err});
  })
});

router.delete('/', (req, res) => {
  CarsData.removeCar(req.body.id)
  .then(() => {
    res.status(200).json({message: 'Car deleted successfully!'});
  })
  .catch(err => {
    res.status(422).json({error: err});
  });
  
});
export default router;