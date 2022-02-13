const express = require('express');
const { getAllUser, addUser, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

//get-all user
router.get('/', getAllUser);

//new user
router.post('/', addUser);

//update user
router.put('/:id', updateUser);

//delete user
router.delete('/:id', deleteUser);

module.exports = router;
