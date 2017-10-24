var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */


router.get('/zpf', function(req, res, next) {
    console.log(fs.readFileSync('public/zpf.txt',"utf-8"))
    var data=fs.readFileSync('public/zpf.txt',"utf-8")
        var text=data.split(":");
        text=text[1]
        text++;
        console.log(text)
        fs.writeFile('public/zpf.txt',"zpf 页面访问次数:"+text,"utf-8",function(err){
            res.render('zpf', { title: text,title2: "zpf.jade"});
        })
});

router.get('/index', function(req, res, next) {
  var data=fs.readFileSync('public/index.txt',"utf-8")
        var text=data.split(":");
        text=text[1]
        text++;
        console.log(text)
        fs.writeFile('public/index.txt',"index 页面访问次数:"+text,"utf-8",function(err){
            res.render('index', { title: text,title2: "index.jade"});
        })
});
module.exports = router;