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
      //devolve um array com todas as ocorrências
      //dar um forEach (ou map) para pegar cada uma?
    });
  })
};


module.exports = {
  mdLinks,
};

