const path = require('path');

const express = require('express');
const getProductsCOntroller = require('../controllers/products');

const router = express.Router();

router.get('/',getProductsCOntroller.getProducts );

module.exports = router;
