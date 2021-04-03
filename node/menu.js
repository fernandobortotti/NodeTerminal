const flag = require('./func');
const shell = require('shelljs');

const flags = flag('--numb')

if (flags == 1){
  shell.exec("sudo apt update -y")
} else if (flags == 2){
  shell.exec('sudo apt upgrade -y')
} else if (flags == 3){
  console.log(flag('--numb'))
} else {
  console.log("Use o seguinte comando")
  console.log("node menu.js --numb [numero]")
  console.log("#######################################")
  console.log("# 1 - Para fazer update no sistema. ###")
  console.log("# 2 - Para fazer upgrade no sistema. ##")
}