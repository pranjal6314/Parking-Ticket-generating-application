
const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
connectToMongo();

const port = 5000
app.use(express.json());
// Available Routes 
app.get('/', (req, res) => {
  res.send('Hello World!')   
})
app.use("/api/slots",require("./routes/slots"));
app.use("/api/allvehical",require("./routes/all_vehical"));
app.listen(port, () => {
  console.log(`InoteBook listening on port http://localhost:${port}`)
})