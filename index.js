const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'd1536eb0a9b04cb19e4a23eb5d2bde96',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

let students = []

const app = express()

app.use(rollbar.errorHandler())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

app.port('/api/student', (req, res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('student added successfully', {author: 'Rodney', type: 'manual'})

    res.status(200).send(students)
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`March onward to.... ${port}`))