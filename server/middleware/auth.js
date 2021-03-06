const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.access_token;

	if (!token) {
		return res.status(403).send('A token is required for authentication');
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send('Invalid Token is expired');
	}

	return next();
};

module.exports = verifyToken;
