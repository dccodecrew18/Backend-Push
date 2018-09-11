// The main point of Entry for To Do node.JS app
//  app.js sets up listener

const config = require('./config'); // remeber can say enough , that you mussst call another file to use it!
// express
const express = require('express');// didnt use var hre on purpose
const app = express();// allows less typing by making app the express function you need
const port = 3000;   // env is enviroment


app.listen(port); // making and calling a new fnction that listens and accepts requests
console.log("Listening on port " + port + "..."); // verifies that the app.js file is actually listening to the onlooker


// mongoose stuff
const mongoose = require('mongoose'); // pulls in refrence

// Actually connect to the database (lets use a promise)

//mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true});
// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true}).then(() => {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const setupController = require('./controller/setupController');
setupController(app);
const apiController = require('./controllers/apiController'); // give it path
apiController(app);





})                 //if i get a get see if it matces this route, and returns the matches