const {Web3} = require("web3");
const ABI = require("./ABI.json")
const BYTECODE = require("./bytecode.json")

// initiliaze a provider
const web3 = new Web3("https://1rpc.io/sepolia");


async function deploy() {

    // Initialize a Wallet with a private key
    const wallet = web3.eth.wallet.add("");
    
    // console.log(wallet);
    // console.log(wallet[0].address);


    // const block = web3.eth.getBlockNumber();

    //  console.log(block);



    // initialize contract 

     const myContract = new web3.eth.Contract(ABI);


     const deploy = myContract.deploy({
        data: BYTECODE,
        arguments: []
     })

     const txRe = await deploy.send({ from: wallet[0].address})
    
     console.log("voici l'adresse du contract :", txRe.options.address)
}

deploy();
