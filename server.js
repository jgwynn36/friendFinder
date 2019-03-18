const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './app/public')));

require(path.join(__dirname, "./app/routes/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routes/htmlRoutes"))(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});