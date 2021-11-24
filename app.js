const express = require('express');
const app = express();

const port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send([
        {
            rolNumb: 'one',
            name: 'jhon smith'
        }, 
        {
            rolNumb: 'two',
            name: 'katerine jewels'
        }
    ])
});

app.listen(port, () => {
    console.log(`yes i am listning at port number ${port}`);
});