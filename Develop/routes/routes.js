const router = require("express").Router();
const path = require('path');

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get('/states', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/states.html"))
});

module.exports = router;