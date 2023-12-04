// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// console.log('my first node application!');
// console.log(__dirname);
// console.log(__filename);
// // setInterval(() =>{
//   console.log('hello node');
// },1000);
// commonJs every file is a module.
// modules in node -- encapsulated code(only share minimum)
// const names = require('./names');
// const sayHi = require('./utils')
// require('./arrayAndObject')

// console.log(names);
// sayHi('aderajew');
// sayHi(names.john);
// sayHi(names.peter);





// os modules


// const os = require('os')
// // info of user
// const user = os.userInfo()
// console.log(user);

// // system uptime 
// console.log(`the system uptime is ${os.uptime()}`);

// const curOs = {
//   name:os.type(),
//   release:os.release(),
//   totalMem:os.totalmem(),
//   freeMem:os.freemem(),

// }
// console.log(curOs);




// path

// const path = require('path');
// console.log(path.sep);

// const filePath = path.join('\\node','node.txt');
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base); // logs the last path

// const absolute = path.resolve(__dirname,'node','node.txt')
// console.log(absolute);// absolute path starting from cd


// sync

// const { readFileSync,writeFileSync } = require('fs');

// const first = readFileSync('./sync.txt','utf8')
// const second = readFileSync('./sync2.txt','utf8')

// writeFileSync('./node.txt',`${first} ${second}`,{ flag : 'a'})


// async
const { readFile,writeFile } = require('fs');

readFile('./sync.txt','utf8',(err,result) => {
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile('./sync2.txt','utf8',(err,result) => {
    if(err){
      console.log(err);
      return;
    }
   const second = result;
   writeFile('./node1.txt',`${first} ${second}`,(err,result) => {
    if(err){
      console.log(err);
      return
    }
    console.log(result);
   });})
})
