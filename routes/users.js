const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    success: true, 
    route: "users",
    message: "Welcome to the users page"
  })
});

module.exports = router;
