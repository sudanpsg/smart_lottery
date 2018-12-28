const hdwallet = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface,bytecode} = require('./compile')
const provider = new hdwallet('already snow dance proof nice manual reopen make focus lounge glove omit','https://rinkeby.infura.io/v3/af975fa453bd4680a7638462546861e5')
const web3 = new Web3(provider)

let accounts
console.log("inside deploy")
const deploy = async()=>{
accounts =await  web3.eth.getAccounts()
console.log(accounts[0])
const d1 = await new web3.eth.Contract(JSON.parse(interface)).
           deploy({data:'0x'+ bytecode,argument:['none']}).
           send({from:accounts[0],gas:1000000})

console.log('deployed address is ' ,d1.options.address)
}
deploy()
