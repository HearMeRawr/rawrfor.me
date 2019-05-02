// Setup
var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/node-blog")

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

var postSchema = new mongoose.Schema({ body: String });

var Post = mongoose.model('Post', postSchema);

// Listen
app.listen(3000, () => {
    console.log("Server listening on 3000");
})

// Routes
app.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        res.render("index", {posts});
    })
 });

 app.post('/addpost', (req, res) => {
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
});