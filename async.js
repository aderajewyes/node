
const { readFile,writeFile } = require('fs');
console.log('start')

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
    // console.log(result);
    console.log('end')
   });})
})
console.log('starting the next one!')