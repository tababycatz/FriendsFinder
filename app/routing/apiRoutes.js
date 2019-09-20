app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});