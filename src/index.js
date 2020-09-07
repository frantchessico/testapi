const express = require('express');
const cors = require('cors');
const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const port = process.env.PORT || 4200;

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})