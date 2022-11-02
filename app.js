const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//mongoose.connect("mongodb+srv://romulan:204214Test@cluster0.mi4y6sg.mongodb.net/JournalDB?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost:27017/JournalDB");

const entrySchema = {
    title: String,
    content: String
}

const Entry = mongoose.model("entry", entrySchema);

const credentialSchema = {
    name: String,
    emailID: String,
    username: String,
    password: String,
    entries: [entrySchema]
}

const Credentials = mongoose.model("credential", credentialSchema);

var currentUser;

app.get("/", function(req, res){
    res.render("signin");
});

app.post("/signin", function(req, res){
    const uid = req.body.userID;
    const pwd = req.body.password;
    Credentials.findOne({username: uid}, function(err, results){
        if(!err){
            if(results){
                if(results.password === pwd){
                    console.log("Login Successful");
                    currentUser = results;
                    entries = results.entries;
                    res.redirect("/home")
                }
                else{
                    console.log("Invalid credentials");
                    console.log(req.body);
                    res.redirect("/");
                }
            }else{
                console.log("Invalid username");
                console.log(req.body);
                res.redirect("/");
            }
        }
    });
});

app.get("/home", function(req, res){
    if(currentUser){
        res.render("home", {entries: currentUser.entries});
    }else{
        res.redirect("/")
    }
});

// app.post("/home", function(req, res){
//     console.log(req.body);
//     res.render("home", {entries: currentUser.entries});
// });

app.get("/posts/:title", function(req, res){
    const entries = currentUser.entries;
    for(let i=0; i<entries.length; i++){
        if(entries[i].title == req.params.title){
            res.render("posts", {entry: entries[i]})
        }
    }
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    let pwd = req.body.password;
    let crpwd = req.body.confirmPassword;
    if (pwd === crpwd){
        const newUser = new Credentials({
            name: req.body.name,
            emailID: req.body.emailID,
            username: req.body.userID,
            password: pwd,
            entries: []
        });
        newUser.save();
        res.redirect("/");
    }else{
        res.redirect("/home");
    }
});

app.get("/compose", function(req,res){
    if(currentUser){
        res.render("compose");
    }else{
        res.redirect("/")
    }
});

app.post("/save", function(req, res){
    if(req.body.title === ""){
        res.redirect("/home");
    }else{
        const newEntry = new Entry({
            title: req.body.title,
            content: req.body.content
        });
        const user = Credentials.findOne({username: currentUser.username}, function(err, results){
            if(!err){
                if(results){
                    results.entries.push(newEntry);
                    currentUser = results;
                    results.save();
                }
            }
        });
        res.redirect("/home");
    }
})

app.get("/logout", function(req, res){
    currentUser = null;
    res.redirect("/");
})

app.get("/delete/:id", function(req, res){
    console.log("returned ID: " + req.params.id);
    const entries_del = currentUser.entries;
    for(let i=0; i<entries_del.length; i++){
        if(entries_del[i]._id == req.params.id){
            console.log("entry found");
            entries_del.splice(i,1);
            currentUser.entries = entries_del;
            currentUser.markModified("entries");
            currentUser.save();
            console.log(currentUser);
            res.redirect("/home");
        }
    }
})

let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port, function(err){
    console.log("server up!");
});