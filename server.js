const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware zum Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint der Daten von einer anderen API holt
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data'); // URL der externen API anpassen
    const data = response.data;
    res.json({ 
      filename: 'data.json',
      data: data 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
