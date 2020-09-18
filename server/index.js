//Import dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
//Set the express app port
const port = process.env.PORT || 3000
//Create the express app and use midlewares
const app = express()
app.use(cors())
app.use(morgan('common'))
app.use(express.json())
//Create express app routes
app.get('/', (req, res) => {
    res.json({
        message: 'This is a contacts app 🙍‍♂️'
    })
})
app.post('/', (req, res) => {
    console.log(req.body)
})
//Create DB connection
const connection_URL = 'mongodb+srv://admin:cLOO0vu2eBeT710k@cluster0.j2ko0.mongodb.net/contactsdb?retryWrites=true&w=majority'
mongoose.connect(connection_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('DB connected')
}).catch(err => console.log(err))
const dbSchema = new mongoose.Schema({
    ContactName: String,
    ContactNumber: Number,
    contactDescription: String
})
const dbModel = mongoose.model('Contact', dbSchema)
//Start the express app
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})