const express = require('express')
const app = express()
const port = 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('This is my API running...')
})

app.get('/about', (req, res) => {
    res.send('This is the about page...')
})

module.exports = app
