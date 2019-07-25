"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const routes_1 = require("./auth/routes");
const app = express();
const PORT = 3000;
// middlewares
app.use(morgan('combined'));
app.use('/', routes_1.default);
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    console.info(`Server listening in port ${PORT}`);
});
//# sourceMappingURL=app.js.map