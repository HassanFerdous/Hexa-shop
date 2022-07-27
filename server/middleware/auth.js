const jwt = require('jsonwebtoken');

const decodedToken = async (token) => {
	let decoded = jwt.verify(token, process.env.SECRET);
	return decoded;
};

const verifyTokenUser = async (req, res, next) => {
	let token = req.headers['authorization'].split(' ')[1];
	if (!token) {
		return res.status(403).send('A token is required for authentication');
	}

	try {
		let decoded = await decodedToken(token);
		req.user = decoded;
	} catch (error) {
		return res.status(401).send('Invalid Token is expired');
	}
	return next();
};

const verifyTokenAdmin = async (req, res, next) => {
	let token = req.headers['authorization'].split(' ')[1];
	if (!token) {
		return res.status(403).send('A token is required for authentication');
	}
	try {
		let decoded = await decodedToken(token);
		if (!decoded.isAdmin) return res.status(401).json('user must be a Admin');
		req.user = decoded;
	} catch (error) {
		return res.status(401).send('Invalid Token is expired');
	}
	return next();
};

module.exports = { verifyTokenUser, verifyTokenAdmin };
