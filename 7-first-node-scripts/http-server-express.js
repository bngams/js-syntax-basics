const express = require('express');

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log("server on");
})