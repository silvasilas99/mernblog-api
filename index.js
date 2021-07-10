const express = require('express');
const app = express();


app.use('/', (req, res) => res.send({ message: 'Welcome to my blog, user' }));
app.listen(5000, () => console.log('Server is running on port 5000.'));