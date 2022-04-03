//external import
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');

require('dotenv').config();

//init app
const app = express();

//parse json
app.use(express.json());
app.use(cookieParser());
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

//product route
app.use('/products', productRouter);

//user route
app.use('/account/', userRouter);

//Error Handling middleware
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

//server
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`listening on the port ${PORT}`);
});
