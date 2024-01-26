"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var PrismaClient = require('@prisma/client').PrismaClient;
var prisma = new PrismaClient();
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('Hello World com TypeScript e Express');
});
app.listen(PORT, function () {
    console.log("Servidor rodando na porta ".concat(PORT));
});
