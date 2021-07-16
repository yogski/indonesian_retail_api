# Express Microservice Boilerplate

## Features
- lightweight
- uses PostgreSQL database
- async methods
- documentation with ApiDoc
- testing (coming soon)

## Structure
- `server.js` : entry point
- `app.js` : the express object
- `routes` : list of routes/endpoints
- `/controllers` : logic to handle request and response
- `/models` : logic to get data from database
- `/middleware` : logic related to RESTful API, e.g authorization, throttling, validation, etc
- `/helpers` : simple reusable functions to be used across modules in this repository

## How To Use

### Clone
1. Get the repository, choose one of the following: 
   - clone via HTTPS : `git clone https://github.com/yogski/express-microservice-boilerplate.git`
   - clone via SSH : `git clone git@github.com:yogski/express-microservice-boilerplate.git`
   - Click "Use This Template", create your repository, then clone it.
2. Change to `express-microservice-boilerplate` directory or your own repository, then run `npm install`.
3. Run `npm install`

### Add Endpoints
1. Add endpoint on `routes.js`
2. Add controller in `/controllers` folder
3. Add model in `/models` folder, then handle the query
4. Connect the model to controller in step 2
5. Connect the controller to endpoint in step 1

### Testing
(coming soon)

### Add Endpoint Documentation
- Go to `controllers`, then add documentation for specific endpoint

### Generate Documentation Page
1. Install apidoc globally : `npm install -g apidoc`.
2. Run `npm run docs:generate`
3. Documentation can be accessed on `{HOSTNAME}/docs`

## Others
Please raise an issue if there is bug or feature request.