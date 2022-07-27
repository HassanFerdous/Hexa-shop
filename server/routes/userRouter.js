const express = require('express');
const { getAllUser, register, signIn, updateUser, deleteUser, showUserInfo } = require('../controller/userController');
const { verifyTokenAdmin, verifyTokenUser } = require('../middleware/auth');

const router = express.Router();

//get-all user
router.get('/users', verifyTokenAdmin, getAllUser);

//login user
router.post('/signin', signIn);

//register user
router.post('/register', register);

//account-page
router.get('/account/:id', verifyTokenUser, showUserInfo);

//update user
router.put('/account/:id', verifyTokenUser, updateUser);

//delete user
router.delete('/account/:id', verifyTokenAdmin, deleteUser);

router.post('/welcome', verifyTokenUser, (req, res) => {
	res.status(200).send('Welcome 🙌 ');
});

module.exports = router;
