const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 5000

const app = express()

app.use(cors())
app.use(bodyParser.json())

// data
const clusters = require('./data/kafka/clusters')
const topics = require('./data/kafka/topics')

app.get('/api/current', (req, res) => {
    res.send({
        version: '1.0.0',
        user: {
            name: 'administrator',
            rights: ['VIEW_ALL', 'WRITE_ALL', 'KAFKA_USE']
        }
    })
})

app.get('/api/clusters', (req, res) => {
    setTimeout(() => res.send(clusters.clusters), 2000)
})

app.get('/api/clusters/:id', (req, res) => {
    const result = clusters.clusters[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.get('/api/clusters/:cluster/topics', (req, res) => {
    setTimeout(() => res.send(topics.topics), 1000)
})

app.get('/api/clusters/:cluster/topics/:id', (req, res) => {
    const result = topics.topics[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}! http://localhost:${port}`))
