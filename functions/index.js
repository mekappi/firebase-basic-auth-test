const functions = require("firebase-functions");
const express = require("express");
const basicAuth = require("basic-auth-connect");

const app = express();

app.all(
  "/*",
  basicAuth(function(user, password) {
    return user === "hoge" && password === "hogehoge";
  })
);

app.use(express.static(__dirname + "/static/"));

exports.app = functions.https.onRequest(app);
