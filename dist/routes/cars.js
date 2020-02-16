import express from 'express';
import axios from 'axios';
import CarsData from './dataLayer';

const router = express.Router();

router.get('/', (req, res) => {

  res.status(200).json(
  //call the mergeFeed which does the magic behind...Facade way
  mergeFeed(response1.data, response2.data, storyTypes));
});
router.post('/', (req, res) => {

  if (CarsData.add(req.body)) {
    res.status(200).json({ message: 'Car Successfully added!' });
  }
});
export default router;
//# sourceMappingURL=cars.js.map