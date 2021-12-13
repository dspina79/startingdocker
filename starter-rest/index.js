const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Starter app is listening on ${port}`)
});

app.get('/hello', function(req, res) {
    console.log('received hello!');
    res.send('Hello, World!');
});

app.post('/foo', function(req, res) {
    let content = req.body;
    console.log(body);
    let recordData = content.record.name;
    res.send(`Received the name ${recordData}`);
});