const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('🚀 Dein erster Node.js-Server läuft!');
});

app.listen(port, () => {
    console.log(`✅ Server läuft auf http://localhost:${port}`);
});
