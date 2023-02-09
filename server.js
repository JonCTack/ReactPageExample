const express = require('express')
const path = require('path')

const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})