let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./static")));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})