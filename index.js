const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (_req, res) => {
  res.send({ message: 'Hello Heroku!' });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
