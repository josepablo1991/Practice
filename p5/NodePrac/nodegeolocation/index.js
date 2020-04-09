// https://github.com/louischatriot/nedb
//first we used npm init
// secondly we used npm install express
// now we call the express package into the script
const express = require('express');

//adding nedb package dependancy to be able to start the data base
const DataStore = require('nedb');
const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public')); //public is the directory name
app.use(express.json({limit:'1mb'}));


//starting the data base

const database = new DataStore('database.db'); //Datastore('nameOfDataBase')
database.loadDatabase(); // this function either creates the file for storage or
//logs in the preexisting db file


/// get function service
/// El ordern de la funcion afecta al servidor (request, response)
app.get('/api2',(request,response) => {
  database.find({},(err,data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  }); // ({}) this means it will do a querry for everything
});


///


app.post('/api',(request,response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp  = timestamp;
  // inster elements into data base
  console.log(data);
  database.insert(data);
  response.json({
    status: 'succes',
    timestamp: timestamp,
    latitude: data.lat,
    longitud: data.lng,
    vegetable: data.vegetable,
    image64: data.image64
  })
  // response.end(); // important to end the response process
}); // seting up an addres ('/api') & and a callback function
