"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/login', (req, res) => {
    res.send('Login GET method');
});
router.post('/login', (req, res) => {
    console.log(req);
    res.send('login post response');
});
exports.default = router;
//# sourceMappingURL=routes.js.map