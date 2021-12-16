const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.Port || 4545

app.listen(port, () => console.log(`March onward to.... ${port}`))