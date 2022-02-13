//external import
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');

const cors = require('cors');
const { urlencoded } = require('express');

//init app
const app = express();

//parse json
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//connect server
mongoose
	.connect('mongodb://localhost/hexashop', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log('connection successful');
	})
	.catch((err) => {
		console.log(err.message);
	});

//Routes
app.use('/products', productRouter);
app.use('/user/', userRouter);

//Error Handling middleware
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

//server
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`listening on the port ${PORT}`);
});
