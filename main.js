const http = require('http');
const fs = require('fs');
const multer = require('multer');
const express = require('express');

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads');
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname);
    }
})

const upload = multer({ storage: storage }).single('myFIle');
const app = express();
app.post('/uploads', function (req, res) {
    upload(req, res, function (error){
        if (error) {
            res.end("file upload error");
        }
        else {
            res.end('file upload success');
        }
    });
})


let server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('Hello World');
    // res.end();

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is HomePage');
        res.end();
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is About Page');
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Contact Page');
        res.end();
    } else if (req.url == '/file-write') {
        fs.writeFile('demo.txt', 'hello world', function (error) {
            if (error) {
                res.end("file error");
            }
            else {
                res.end('file write success');
            }
        });  
    } else if (req.url == '/file-upload') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('file upload success');
        res.end();
    }

    res.end();

}).listen(5500, function () {
    console.log("server listening on port 5500");
});
// server.listen(5500);
