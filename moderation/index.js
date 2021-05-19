const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 4003
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post("/events", async (req, res) => {
    const { type, data } = req.body

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'
        
        await axios.post(`http://event-bus-srv:4005/events`, {
                type: 'CommentModerated',
                data: {
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
            }
        })
    }
        res.send({})
})

app.listen(port, () => {
    console.log(`Server running on port http:///172.17.0.6:${port} 🔥`)
})