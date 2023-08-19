const express = require('express');  // Require the express module
const app = express();  // Create an instance of the express application
const PORT = 8090;
app.use(express.json());

app.listen(
  PORT, () => console.log(`Listening on port ${PORT}`)
);

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'large' 
  });
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
 
  if (!logo) {
    res.status(418).send({ message: 'We need a logo!' });
  } else {
    res.send({
      tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
  }
});


app.put('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo!' });
  } else {
    res.send({
      tshirt: `👕 with updated ${logo} and ID of ${id}`,
    });
  }
});

app.delete('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo!' });
  } else {
    res.send({
      deleted: true,
      message: `T-shirt with ${logo} and ID ${id} has been deleted`,
    });
  }
});