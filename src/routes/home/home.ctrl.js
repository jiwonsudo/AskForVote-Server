"use strict";

const hello = (req, res) => {
    res.send("Here is Root!");
};

const login = (req, res) => {
    res.send("Here is Login");
};

module.exports = {
    hello,
    login,
};