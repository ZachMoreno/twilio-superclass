'use strict';

const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
    res.send('ahoy');
});

module.exports = router;