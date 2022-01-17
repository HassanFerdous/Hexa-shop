//external import
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productsRouter');

//init app
const app = express();

//parse json
app.use(express.json());

//connect server
mongoose
	.connect('mongodb://localhost/hexashop')
	.then(() => {
		console.log('connection successful');
	})
	.catch((err) => {
		console.log(err);
	});

//Routes
app.use('/products', productRouter);

//Error Handling middleware
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

//server
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`listening on the port ${PORT}`);
});
