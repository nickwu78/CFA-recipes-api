var express = require('express');
var jwt = require('jsonwebtoken');

const authApi = (req, res, next) => {
  console.log("Authenticating api request")
  const key = req.body.key ||
              req.query.key ||
              req.headers['x-access-token'];

    var decoded = jwt.verify(key, 'secret');
    console.log(decoded.email)
    let found = false;
    
    if (decoded.email === 'nickwu78@gmail.com') {
      found = true;
    }
    
    if (found) {
      next();
    } else {
      res.status(401).json({
      success: false,
      message: 'Not Authorised',
      });
    }
};

module.exports = authApi;
