import { expect } from 'chai';
import * as CarsData  from '../server/modules/dataLayer';

import { connectDB, closeConnection  } from '../server/config/index';

process.env.NODE_ENV = 'test';

describe('Datalayer test', () => {
    before(done => {
        connectDB()
        .then(() => done())
        .catch(err => done(err));
    });
    after(done => {
        closeConnection()
        .then(() => done())
        .catch(err => done(err));
    });

    it('Deletes one car', (done) => {
        CarsData.addCar({make: 'BMW', model: '7 series', year: '2018'})
        .then(() => CarsData.getCars())
        .then(car => car[0]._id)
        .then(carId => CarsData.removeCar(carId))
        .then(() => CarsData.getCars())
        .then(cars => {
            expect(cars.length).to.equal(0);
            done();
        });
    });
});
