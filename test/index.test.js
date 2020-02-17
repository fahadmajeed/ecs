import { expect } from 'chai';
import request from 'supertest';

import app from '../server/app';

import { connectDB, closeConnection  } from '../server/config/index';

process.env.NODE_ENV = 'test';

describe('POST /api/v1/cars', () => {
    beforeEach(done => {
        connectDB()
        .then(() => done())
        .catch(err => done(err));
    });
    afterEach(done => {
        closeConnection()
        .then(() => done())
        .catch(err => done(err));
    });

    it('Add a new car', (done) => {
        request(app).post('/api/v1/cars')
        .send({make: 'BMW', model: '7 Series', year: '2018', colour: 'black'})
        .set('Accept', 'application/json')
        .expect(201, {
            message: 'Car Successfully added!'
          }, done);
    });

    it('Retrive all cars', (done) => {
        request(app).get('/api/v1/cars')
        .expect(200).end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.length).not.to.be.null;
            return done();
          });
    });

});
