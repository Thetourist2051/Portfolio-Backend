const express = require('express')
const userController = require('./controllers/user')
const gptsController = require('./controllers/chatgpt')

const app = express.Router();

app.get('/getUser', async(req, res)=>{
     userController.getUsers(req, res)
})


app.get('/chatgpt', async (req, res)=>{
     gptsController.askChatgpt(req, res)
})

module.exports = app;