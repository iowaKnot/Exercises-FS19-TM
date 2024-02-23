const crypto = require('crypto');
crypto.getCurves(); // im using this to find available methods in crypto module

const randomID = crypto.randomBytes(16).toString('hex');
console.log(randomID); // im using this to generate a random ID with .randomBytes() and toString() methods