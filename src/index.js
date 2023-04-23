const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser'); // Agregar body-parser
require ("dotenv").config();
const app = express();
const ActivityRoute = require('./Routes/activities.routes');

app.use(cors())



mongoose.connect('mongodb+srv://carlos:Monopolis19@dbcluster.khexvht.mongodb.net/Activities1?retryWrites=true&w=majority' ,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Database connection established'))
.catch((error)=>console.error(error));


const PORT = process.env.PORT || 3050;
//  corsOptions ={
//     origin:'*',
//     optionsSuccessStatus:200
// }
// app.use(cors(corsOptions))

app.use(bodyParser.json()); // Agregar body-parser

app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
});

app.use('/activities', ActivityRoute);
