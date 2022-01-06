const express = require('express');

const PORT = 3001;
const API_MESSAGE = process.env.API_MESSAGE || 'Procfile funciona pra dedeu!';

const app = express();

app.get('/', (_req, res) => {
  res.send({ message: `${API_MESSAGE}` });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
