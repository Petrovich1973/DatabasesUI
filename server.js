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
const brokers = require('./data/kafka/brokers')
const partitions = require('./data/kafka/partitions')

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
    setTimeout(() => res.send(clusters.clusters), 200)
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
    setTimeout(() => res.send(topics.topics), 100)
})

app.get('/api/clusters/:cluster/topics/:id', (req, res) => {
    const result = topics.topics[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.get('/api/clusters/:cluster/topics/:topic/partitions', (req, res) => {
    setTimeout(() => res.send(partitions.partitions), 300)
})

app.get('/api/clusters/:cluster/topics/:topic/partitions/:id', (req, res) => {
    const result = partitions.partitions[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.get('/api/clusters/:cluster/brokers', (req, res) => {
    setTimeout(() => res.send(brokers.brokers), 100)
})

app.get('/api/clusters/:cluster/brokers/:id', (req, res) => {
    const result = brokers.brokers[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.get('/api/clusters/:cluster/brokers/:broker/partitions', (req, res) => {
    setTimeout(() => res.send(partitions.partitions), 300)
})

app.get('/api/clusters/:cluster/brokers/:broker/partitions/:id', (req, res) => {
    const result = partitions.partitions[req.params.id]
    if(!result) {
        res.sendStatus(404)
    } else {
        res.send(result)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}! http://localhost:${port}`))
