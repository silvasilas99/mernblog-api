const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose
 	.connect(process.env.MONGO_URL, {
    	useNewUrlParser: true,
    	useUnifiedTopology: true,
    	useCreateIndex: true,
    	useFindAndModify:true
  	})
  	.then(console.log("Connected to DataBase sucessfully!"))
  	.catch((err) => console.log(err));

app.use('/', (req, res) => res.send({ message: 'Welcome to my blog, user' }));
app.listen(5000, () => console.log('Server is running on port 5000.'));