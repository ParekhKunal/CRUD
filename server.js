const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
var cors = require('cors')

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
];

const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connected');
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.use('/api/employee', EmployeeRoute);

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));