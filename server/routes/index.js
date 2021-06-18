const router = require('express').Router();

const mailController = require('../controllers/mailController');

router.route('/contact').post(mailController);

module.exports = router;