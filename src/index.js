const express = require('express');
const app = express();
const port = 3000;
// parse application/json
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

// start listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
