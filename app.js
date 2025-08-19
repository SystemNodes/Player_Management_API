const express = require("express");
const app = express();
const PORT = 1900;

// middleware
app.use(express.json());

// routers
const router = require("./Routers/appRouters");
app.use(router);

app.listen(PORT, () => {
    console.log(`My server is running on port: ${PORT}`);
});
