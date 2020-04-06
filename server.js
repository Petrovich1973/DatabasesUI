const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 5000

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Для плоского списка
app.get('/api/current', (req, res) => {
    res.send({
        version: '1.0.0',
        user: {
            name: 'administrator',
            rights: ['VIEW_ALL', 'WRITE_ALL', 'KAFKA_USE']
        }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}! http://localhost:${port}`))
