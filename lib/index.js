const fs = require('fs');

const mdLinks = (path) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, path) => {
    if (err) throw err;
    console.log(path);
  });
};


module.exports = {
  mdLinks,
};