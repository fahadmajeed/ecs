import express from 'express';
import axios from 'axios';
import * as CarsData from '../modules/dataLayer';

const router = express.Router();

router.get('/', (req, res) => {

        res.status(200).json(
            CarsData.getCars()
        )
 
});
router.post('/', (req, res) => {
  
  if (CarsData.addCar(req.body)) {
    res.status(200).json({message: 'Car Successfully added!'});
  } else {
    res.status(422).json({error: 'Car already exists or there is some problem!'});
  }
});
router.delete('/', (req, res) => {
  const actionMsg = CarsData.removeCar(req.body.id)
  if (actionMsg) {
    res.status(200).json({message: actionMsg});
  } else {
    res.status(422).json({error: 'Car already deleted or there is some problem!'});
  }
});
export default router;