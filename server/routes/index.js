//Router
const express = require('express');
const router = express.Router();

//Routes
router.use('/boats', require('./boats'));
router.use('/sailors', require('./sailors'));
router.use('/subs', require('./subs'));

//Error Handling - 404 if we request a /api/ route that doesn't exist
router.use((req, res, next) => {
  const err = new Error('Arrrrrr not found matey, walk the plank');
  err.status = 404;
  next(err);
});

module.exports = router;
