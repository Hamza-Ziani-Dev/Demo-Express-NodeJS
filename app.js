const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.redirect('/localhost:5432'); // redirect To localhost:5432
    // res.send('Hello World!')
});
app.get('/localhost:5432', (req, res) => {
    res.json({ message: "Hello World!" })
});


app.use((req, res) => {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})