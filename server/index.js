//Import dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
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

//Start the express app
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})