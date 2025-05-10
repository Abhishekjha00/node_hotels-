const express = require('express'); //express ki requirement or import kar rhe hai

const app = express()    // express ko import kar liya app me, app is an instance of express (blueprint), app ki help se ab sab karenge 
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  //store the data in req.body me
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Welcome to my hotel...How can i help you?, we have to list of menu')
})

// Import the router files 
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menuItem', menuRoutes);

app.listen(3000, () => {
          console.log('listening on port 3000')
}) // 3000 is a port or address of server