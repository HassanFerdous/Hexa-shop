const express = require('express');
const { getAllUser, register, signIn, updateUser, deleteUser, showUserInfo } = require('../controller/userController');
const auth = require('../middleware/auth');

const router = express.Router();

//get-all user
router.get('admin/users', auth, getAllUser);

//login user
router.post('/signin', signIn);

//register user
router.post('/register', register);

//account-page
router.get('/account/:id', auth, showUserInfo);

//update user
router.put('/account/:id', updateUser);

//delete user
router.delete('/account/:id', deleteUser);

router.post('/welcome', auth, (req, res) => {
	console.log(req.cookies);
	res.status(200).send('Welcome 🙌 ');
});

module.exports = router;
