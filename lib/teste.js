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