const {web3} = require("web3");
const ABI = require("./ABI.json")
const BYTECODE = require("./bytecode.json")

// initiliaze a provider
const web3 = new Web3("");


async function deploy() {

    // Initialize a Wallet with a private key
    const wallet = web3.eth.wallet.add("0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec");


    console.log(wallet)
    console.log(wallet[0].address)

    // initialize contract 

    const myContract = new web3.eth.Contract(ABI, "");
    
}
