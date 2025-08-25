const express = require("express");
const app = express();
const PORT = 1900;

// middleware
app.use(express.json());

// routers
const router = require("./Routers/playerRouter");
app.use(router);
const statsRouter = require('./Routers/statsRouter');
app.use(statsRouter);

app.listen(PORT, () => {
    console.log(`My server is running on port: ${PORT}`);
});
