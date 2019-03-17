var supercom = require("super.js");
console.log("我是common.js");
function sayHello(name){
  console.log('hello,'+name)
}

function sayBye(name)
{
  console.log("bye,"+name)
}

module.exports = {
  sayHello: sayHello,
  sayBye:sayBye
}