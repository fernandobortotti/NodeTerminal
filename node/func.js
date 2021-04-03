// função que coleta as informações que o usuário coloca no terminal
function valueFlags(flag){
  const index = process.argv.indexOf(flag) + 1;
  return process.argv[index]
}

module.exports = valueFlags;