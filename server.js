let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
    public = path.join(__dirname, 'public');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
})

// app.post("/test", function (req, res) {
//     console.log('pressbutton')
// })

app.use('/', express.static(public));

app.listen(8000, function () {
    console.log("listening on port 8000");
})