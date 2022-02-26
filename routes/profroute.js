const express = require('express');

const profController = require('../controllers/profcontroller');

const router = express.Router();

//All after /professional

// GET /
router.get('/', profController.getPosts);

module.exports = router;