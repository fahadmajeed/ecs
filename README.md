# ECS Car Resources REST API

Car Resources API app built in NodeJS, Express.


## Dev/Prod setup
Different babel configurations are provided in `bin` directory for dev and prod app environments

## Requirements

For development, you will only need Node.js, express and a node global package, NPM, installed in your environement.


## Install

    $ git clone https://github.com/fahadmajeed/ecs.git
    $ cd ecs
    $ npm install

## Test 
App uses Mocha, Chai for unit tests and Supertest for integration tests.
To run tests 
on commandline run `npm run test`
All tests are defined in `test` directory


## Running the project on local/dev environment

    $ npm run start

##Production run instructions
For production environment on cloud or server in a containerized environment. 
Following command can be configured

    $ npm run production

# Car API End points

## GET /api/v1/cars
Gets a list of cars.
App by default runs on port 3000 so making a GET request to `http://localhost:3000/api/v1/cars` would return response in following 
structure:
You can use Postman client or fire up browser at following URL to see the response.
***response***
```
[
    
]
