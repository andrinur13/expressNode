const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application using json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

const rotues = require('./router');
rotues(app);

app.listen(port, () => {
    console.log(`Server started on port`);
});