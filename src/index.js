const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Agregar body-parser
require ("dotenv").config();
const app = express();
const ActivityRoute = require('./Routes/activities.routes');

mongoose.connect(process.env.MONGODB_URI ,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Database connection established'))
.catch((error)=>console.error(error));


const PORT = process.env.PORT || 3050;

app.use(bodyParser.json()); // Agregar body-parser

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
});

app.use('/activities', ActivityRoute);