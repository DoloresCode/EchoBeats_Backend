const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello, world 2!');
});

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));