module.export = (app) => {
    app.get('/', (req, res) => {
        res.render("home.ejs");
    });
}