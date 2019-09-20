var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
