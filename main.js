const http = require('http');
const fs = require('fs');
const multer = require('multer');
const express = require('express');

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
        
    }

}).listen(5500, function () {
    console.log("server listening on port 5500");
});
// server.listen(5500);
