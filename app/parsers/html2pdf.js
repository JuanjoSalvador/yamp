"use strict";
/*
Html to PDF parser
*/
const Pdf = require('html-pdf');


module.exports = function(html, outputFile, cb) {
    Pdf.create(html, {
        "border": {
            "top": "0",
            "right": "0",
            "bottom": "1in",
            "left": "0"
        },
        "header": {
            "height": "1in",
        },
        "zoomFactor": "0.75",
        "base": "file://" + process.cwd() + "/"
    }).toFile(outputFile + '.pdf', function(err, res) {
        if (err) return cb(new Error("[html-pdf] outputFile error: " + err), res);
        return cb(null, res);
    });
};
