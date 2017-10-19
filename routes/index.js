const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/CivTracker';


/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'index.jade'));
});

router.use('/api/v1/achievements',			require('./achievements'));
router.use('/api/v1/earnedachievements',	require('./earnedachievements'));
router.use('/api/v1/civs',					require('./civs'));
router.use('/api/v1/difficulties',			require('./difficulties'));
router.use('/api/v1/users',					require('./users'));
router.use('/api/v1/wincons',				require('./wincons'));
router.use('/api/v1/earnedwins',			require('./earnedwins'));

module.exports = router;