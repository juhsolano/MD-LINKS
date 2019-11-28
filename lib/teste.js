function mdLinks(){
  return new Promise((resolve, reject) => {
    const lerArquivo = 'banana[google](www.google.com)';
    const regex = [{href:'www.google.com', text:'google'}]
    if ('deuErro!') {
      reject('DEUM UM ERRO')
    }
    resolve(regex);
    });
  //o fs.readFile vai aqui dentro e depois passa o resolve()
  //Promise.all() -> ações simultâneas, dispara e espera o retorno de todas
};


mdLinks()
  .then((valor) => console.log(valor))
  .catch();

module.exports = {
  mdLinks,
}

//---------------------------------------------------------------
//Linha de comando

#!/usr/bin/env node >>> linha que importa, avisa que é executado com node
adiciona o "bin no json"
no terminal "npm link" ou sudo npm link

//TESTES
so testa a função do indexed.js
No terminal >> npm i --save-dev jest 
npm 