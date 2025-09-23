const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { registerValidation, loginValidation, changePasswordValidation } = require('../middleware/validation');
const { register, login, getProfile, updateProfile, changePassword } = require('../controllers/authController');

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.put('/change-password', authenticateToken, changePasswordValidation, changePassword);

module.exports = router;
