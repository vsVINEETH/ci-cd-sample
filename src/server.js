const express = require('express');

const app = express();
const port = 3001

app.get('/api/hello',(req, res) => {
    res.json({message:'Response from Hello'})
});

app.post('/api/greet', (req, res) => {
    const {name} = req.body;
    res.json({message:`Hello, ${name}`})
});

const server = app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

module.exports = { server };