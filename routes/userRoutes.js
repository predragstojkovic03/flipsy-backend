const express = require('express');
const {
    registerUser,
    authUser,
    changeRole,
    getUser,
    changePassword,
} = require('../controllers/userController');
const { protect, superuser } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/me').get(protect, getUser);
router.route('/changeRole/:id').put(protect, superuser, changeRole);
router.route('/change-password/').put(protect, changePassword);

module.exports = router;
