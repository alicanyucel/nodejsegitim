const express = require('express');
const app = express(); // backend için express kullanıyoruz
const PORT = 3000;

// Basit endpoint
app.get('/', (req, res) => {
  res.send('Merhaba Node.js!');
});

// Server başlat
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
