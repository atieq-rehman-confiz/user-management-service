const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// GET all users
router.get('/users', UserController.getUsers);

// POST a new user
router.post('/users', UserController.createUser);

// PUT update a user by ID
router.put('/users/:id', UserController.updateUser);

// DELETE a user by ID
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;