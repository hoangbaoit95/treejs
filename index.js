const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('HELLO WORLD!');
})
app.listen(80, () => console.log('Server running on port 3000'));