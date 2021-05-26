const express = require("express");
const app = express();

const port = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
})

const server = app.listen(port, () => {
    console.log('server running at ' + port)
    })
