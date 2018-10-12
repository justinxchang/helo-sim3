// require in dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');

// initialize express app
const app = express();

// destructure from process.env
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET
} = process.env

// connect to DB
massive(CONNECTION_STRING).then(db => app.set('db', db))

// middleware
app.use(bodyParser.json())

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

// endpoints
app.post('/api/login', (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;
    const db = req.app.get('db')
    db.get_user([username, password])
    .then((user) => {
        let foundUser = user[0] 
        if(foundUser && (password === foundUser.password)) {
            session.user = foundUser
            res.status(200).send(session.user)
        } else if (foundUser) {
            res.status(403).send("Incorrect Password")
        } else {
            res.status(401).send("Unauthorized")
        }
    })
    
})

app.post('/api/register', (req, res, next) => {
    const {username, password} = req.body;
    const db = req.app.get('db')
    db.create_user([username, password])
    .then((createdCustomer) => {
        req.session.user = createdCustomer[0]
    })
})

// listen
app.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`))