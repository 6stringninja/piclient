"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
app.use(express.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/api/sh', function (req, res) {
    // res.send(clientlist);
});
app.get('/who', function (req, res) {
    console.log(req);
    res.send({
    // ip: { data: new ServerOs().Ips()[0].ip, clients: clients.map(m => m.name) }
    });
});
app.post('/who', function (req, res) {
    var wi = req.body;
    if (true) {
        //  res.send({ success:true);
    }
    else {
        console.log('bad hash');
    }
});
app.get('/clients', function (req, res) {
    // console.log(clients);
    // res.send(clients);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
function dosomething() {
    // const si = new ServerOs();
    // console.log(clientlist.clients.map(c => c.name));
    setTimeout(function () {
        dosomething();
    }, 5000);
}
exports.dosomething = dosomething;
dosomething();
