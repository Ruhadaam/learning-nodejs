const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/blog/:blogid', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/user', 'blog-detail.html'));
});


router.use('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/user", "blog.html"));
});

router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/user", "index.html"));
});

module.exports = router;