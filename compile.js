const fs = require('fs')
const solc = require('solc')
const path = require('path')
console.log('wtttf"')
const p = path.resolve(__dirname,'lottery.sol')
const source = fs.readFileSync(p,'utf8')


const x =solc.compile(source,1).contracts[':Lottery']
//console.log(x)
module.exports = x
