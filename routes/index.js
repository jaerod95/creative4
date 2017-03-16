var express = require('express');
var router = express.Router();
var fs = require('fs');
var https = require('https');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('trooper.html', {
    root: 'public'
  });
});

router.get('/trooper', function (req, res, next) {
    fs.readFile(path.join(__dirname, "..", "public", "trooper.png"), function (err, data) {
        var randomX = Math.floor(Math.random() * 90) + "%" //between 0 and 90
        var randomY = Math.floor(Math.random() * 90) + "%" //between 0 and 90
        var jsonData = {"top": randomY, "left": randomX, "data": data}
        res.status(200).json(jsonData);
    });
});

module.exports = router;