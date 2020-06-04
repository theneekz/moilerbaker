//put routes to api/boats
const express = require('express');
const router = express.Router();

//GET request to /api/boats
router.get('/', async (req, res, next) => {
  try {
    res.send('Welcome to mah boatz');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
