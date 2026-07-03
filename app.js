const express = require('express');
const app = express();

const PORT = '3001';

app.get('/', (req, res) => {
  res.send('Welcome to Customer Api');
});
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is Running on PORT ${PORT}`);
  } else {
    console.log(`Server Error ${error}`);
  }
});
