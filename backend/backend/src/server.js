const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const levelController = require ('./controller/levelController')
const developerController = require ('./controller/developerController')
const db = require('./configuration/database')

app.use(cors())

app.use(bodyParser.json());
app.use("/level", levelController);
app.use("/developer", developerController);


app.listen(port, () => {
  console.log(`Server start and listening on port ${port}`)
})