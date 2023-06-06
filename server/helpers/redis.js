require('dotenv').config()
const Redis = require('ioredis');
const ShortURL = require('../models/URL')

class Queue {
    constructor() {
        this.items = []
    }

    enqueue = async (element) => {
        if (this.size() < 10) {
            this.items.push(element)
        } else {
            while (!this.isEmpty()) {
                await ShortURL.findOneAndUpdate({ hash: this.dequeue() }, { $inc: { visits: 1 } })
                    .catch(err => console.log(err))
            }
        }
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

let jobQueue = new Queue()

const connectRedis = async () => {

    const client = new Redis({
        host: '127.0.0.1',
        port: 6379
    });

    return client
}

module.exports = { jobQueue, connectRedis }