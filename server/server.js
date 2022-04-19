const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fixCORS = require('./middleware/fixCORS');
const mongoose = require('mongoose');
const PORT = 4000;
const logger = require('./logger');
const userRoutes = require('./api/route/user.routes');
const cinemaRoutes = require('./api/route/cinema.routes');

// connecting mongos 
mongoose.connect('mongodb://127.0.0.1:27017/MoviePortal', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', ()=>{
   console.log("MongoDB database connection established successfully");
})

// fix cors 
// app.use(cors);
app.use(fixCORS);
app.options('*', cors())

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(logger);
app.use('/users', userRoutes);
app.use('/cinemas', cinemaRoutes);


// create server 
app.listen(PORT, ()=> {
   console.log("Server is running on Port: " + PORT);
});



