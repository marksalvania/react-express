const express = require('express')
const path = require('path')
const app = express()

// Load React build from root
app.use('/', express.static(path.join(__dirname, 'client/build')))

// Set all React URLS here
app.get(['/', '/users', '/about'], (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

// Setup all backend API here
app.get('/test', function (req, res) {
    res.send('Hello World')
})

// Handle all 404 Error
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

// 3000 for dev 443 for live
app.listen(3000)