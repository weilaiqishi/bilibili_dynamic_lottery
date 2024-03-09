const express = require('express')
const router = express.Router()


/*
router.get('/', function(req, res) {
	res.send('Hello, world!');
});
*/

const path = require('path')
router.use('/', express.static(path.join(__dirname, 'public')))

module.exports = router
