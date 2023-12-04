const { readFileSync,writeFileSync } = require('fs');
console.log('start the first step');

const first = readFileSync('./sync.txt','utf8')
const second = readFileSync('./sync2.txt','utf8')

writeFileSync('./node.txt',`${first} ${second}`,{ flag : 'a'})
console.log('end the first step');
console.log('starting the next one');