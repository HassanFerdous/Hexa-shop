const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname + '/../../client/public/assets/images/'));
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage: storage });

// const handleUpload = (req, res, next) => {
// 	return upload(req, res, function (err) {
// 		if (err instanceof multer.MulterError) {
// 			// A Multer error occurred when uploading.
// 			console.log(err);
// 		} else if (err) {
// 			// An unknown error occurred when uploading.
// 			console.log(err);
// 		} else {
// 			next();
// 		}
// 	});
// };

module.exports = {
	upload,
};
