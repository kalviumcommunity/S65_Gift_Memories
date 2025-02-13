const express = require('express'); 
const app = express(); 


app.get('/ping', (req, res) => {
    res.send('pong');
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});
