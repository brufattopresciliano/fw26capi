module.express = (app) => {
    app.get('/', (req, res) => {
        res.render("home.ejs");
        
        });
}