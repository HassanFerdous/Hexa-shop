const express = require('express');
const { getAllUser, register, signIn, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

//get-all user
router.get('/all', getAllUser);

//login user
router.post('/signin', signIn);

//register user
router.post('/register', register);

//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id', deleteUser);

module.exports = router;
