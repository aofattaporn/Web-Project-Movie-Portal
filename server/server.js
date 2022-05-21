const express       = require('express'), 
      app           = express(),
      bodyParser    = require('body-parser'),
      cors          = require('cors'),
      fixCORS       = require('./middleware/fixCORS'),
      mongoose      = require('mongoose'),
      PORT          = 4000,
      path         = require('path');
      upload        = require('./middleware/uploadfile');
      logger        = require('./logger'),
      seed          = require('./seed');

// create Routes  
const userRoutes    = require('./api/route/user.routes'),
      cinemaRoutes  = require('./api/route/cinema.routes'),
      movieRoutes   = require('./api/route/movie.routes'),
      programRoutes = require('./api/route/program.routes'),
      reserveRoutes = require('./api/route/reserve.routes');


// connecting mongos 
mongoose.connect('mongodb+srv://Attaporn1840:Aof.026449013@web-movie-portal.ahueb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', ()=>{
   console.log("MongoDB database connection established successfully");
})

// fix cors 
// app.use(cors);
app.use(express.static(__dirname + './public'));
app.use(fixCORS);
app.options('*', cors())

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(logger);

app.use('/seed', seed);
app.use('/users', userRoutes);
app.use('/cinemas', cinemaRoutes);
app.use('/movies', movieRoutes);
app.use('/programs', programRoutes);
app.use('/reserves', reserveRoutes);

if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname, '../build')))

   app.get("*", (req, res)=>{
      res.sendFile(path.join(__dirname, "../build/index.html"))
   })
}
// create server 
app.listen(PORT, ()=> {
   console.log("Server is running on Port: " + PORT);
});



