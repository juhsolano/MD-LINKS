const fs = require('fs');
const regexp = /(\[[^\s].*?\])(\(https?:+[^\s]+[\w/])\)/gm;

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject('Caminho não encontrado');
    }
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err);
      }
      const linksMD = data.match(regexp)
        .map(element => {
          const cleanContent = element.split('](');
          return {
            href: cleanContent[1].slice(0,-1),
            text: cleanContent[0].slice(1)
          }
        });
        resolve(linksMD);
    });
  });
};


module.exports = {
  mdLinks,
};