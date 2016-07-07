#!/usr/bin/env node //to make it run at linux

//commander
var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);



//requires
var engine=require("./cmdEngine")
var resolve=require("./cmdResolve")

//fakes
;(function(){
    console.log('it starts')
    //初始化工作 （包括初始化所有子插件）
    
    //获取传入参数

    //判断是哪一种命令
    var cmd =resolve.solve(parms)
    // 启动命令执行器，执行命令 
    engine.run(cmd)


})();
