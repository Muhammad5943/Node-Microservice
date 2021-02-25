const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');

const app = express();
app.use(bodyParser.json())

const events = []

app.post('/events', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post('http://172.17.0.4:4000/events', event)
    axios.post('http://172.17.0.5:4001/events', event)
    axios.post('http://172.17.0.7:4002/events', event)
    axios.post('http://172.17.0.6:4003/events', event)

    res.send({
        status: 'OK'
    })
});

app.get('/events', (req, res) => {
    res.send(events)
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Server running on port http://172.17.0.3:${port} 🔥`)
});