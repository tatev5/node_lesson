const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('recipes');
});

router.get('/recipe/:id', (req, res, next) => {
  return res.render('recipe-single');
});

module.exports = router