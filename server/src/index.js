const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('got request', req.body);
  res.send({ results: 'success' });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!!`));
