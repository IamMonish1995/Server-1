const path = require('path');
const fs = require('fs');

exports.moveFileFunction = async (reqFile, reqPath) => {
    const fileUrl = await new Promise(function (fulfill, reject) {
        const fileName = Date.now() + path.extname(reqFile.name);
        reqFile.mv(`./public/${reqPath}` + fileName, (error) => {
            if (error) {
                reject(false);
            }
            fulfill(fileName);
        })
    });
    return (fileUrl) ? reqPath + fileUrl : '';
}

exports.removeFile = async (reqPath) => {
    fs.unlink(`./public/${reqPath}`, (err) => {
        if (err) {
            return
        }
    })
}