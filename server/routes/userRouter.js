const express = require('express');
const { getAllUser, register, signIn, updateUser, deleteUser } = require('../controller/userController');
const auth = require('../middleware/auth');

const router = express.Router();

//get-all user
router.get('/all', auth, getAllUser);

//login user
router.post('/signin', signIn);

//register user
router.post('/register', register);

//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id', deleteUser);

router.post('/welcome', auth, (req, res) => {
	res.status(200).send('Welcome 🙌 ');
});

module.exports = router;
