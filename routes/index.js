const express = require('express');
const router = express.Router();

const data = [
    {
        message: "this is a message",
    }
];

router.get('/', (req, res) => {
    res.json(data);
});

module.exports = router;