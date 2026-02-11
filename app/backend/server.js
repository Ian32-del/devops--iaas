const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to DevOps IAAS!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from DevOps IAAS' });
    });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});