# ECS Car Resources REST API

Car Resources API app built in NodeJS, Express, Chai, Mocha and Axios.


## Dev/Prod setup
Different babel configurations are provided in `bin` directory for dev and prod app environments

## Requirements

For development, you will only need Node.js, express and a node global package, NPM, installed in your environement.

## Environment variable
There is one environment variable needed to be set. 
It is `MONGODB_CONN'. Its value can be requested or sent via email.

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
     {
        "_id": "5e4a6e3f166de844543338ca",
        "make": "BMW",
        "model": "7 Series",
        "colour": "Silver",
        "year": "2011",
        "words": "queries ceres theories wearies sheer ease",
        "__v": 0
    },
    {
        "_id": "5e4a6e46166de844543338cb",
        "make": "BMW",
        "model": "7 Series",
        "colour": "White",
        "year": "2012",
        "words": "queries ceres theories wearies sheer ease",
        "__v": 0
    }
]
```

## GET /api/v1/cars/:id
Gets one existing car info

## POST /api/v1/cars
Creates a new car.
body of request has to have at least following 3 properties
```
{
        "make": "BMW",
        "model": "7 Series",
        "year": "2011",
}
```

## PUT /api/v1/cars
Updates existing car.
body of request has to have at least following 4 properties including ID i.e, '_id'
```
{
        "_id": "5e4a6e3f166de844543338ca"
        "make": "BMW",
        "model": "7 Series",
        "year": "2011",
}
```
## DELETE /api/v1/cars/:id
Deletes existing car.
Request param is the ID of the car you want to delete

