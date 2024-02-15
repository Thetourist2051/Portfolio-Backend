const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 3003;
const cors = require("cors");
const openai = require('openai')

const indexRouter = require('./src/index')

const app = express()
dotenv.config()

app.use(cors());

app.use(express.json());

app.use("/", indexRouter);


app.listen(port, ()=> console.log(`server running on port ${port}`))