import {ethers} from "./ethers-5.6.esm.min.js";
import {abi, contractAddress} from "./constants.js";
const connectbutton = document.getElementById("ConnectButton");
connectbutton.onclick = connect;
const fundbutton = document.getElementById("FundButton");
fundbutton.onclick = fund;
const BalanceButton = document.getElementById("BalanceButton");
BalanceButton.onclick = balance;
const WithdrawButton = document.getElementById("WithdrawButton");
WithdrawButton.onclick = withdraw;

console.log(ethers);
async function connect() {
  console.log("Connecting....");
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({method: "eth_requestAccounts"});
    } catch (error) {
      console.log(error);
    }
    connectbutton.innerHTML = "Connected";
    console.log("Connected Wallet");
  } else {
    connectbutton.innerHTML = "I dont see a metamask wallet";
    console.log("Not Connected");
  }
}

async function fund() {
  const ethAmount = document.getElementById("ethAmount").value;

  if (typeof window.ethereum !== "undefined") {
    /*Since we want to interact with our contract we first need to connect to a blochain network 
    using the RPC URL, then a wallet to sign transactions then a contract address and an ABI to
    interact with the contract from our frontend to the backend.*/
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.fund({
        value: ethers.utils.parseEther(ethAmount),
      });
      console.log(`Funding with ${ethAmount}`);
      await listenertransaction(transactionResponse, provider);
      console.log("Funding Successful.");
    } catch (error) {
      console.log(error);
    }
  }
}

async function balance() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Getting Balance....");
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(contractAddress);
    console.log(ethers.utils.formatEther(balance));
  }
}

async function withdraw() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Withdrawing.....");
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.withdraw();
      await listenertransaction(transactionResponse, provider);
      console.log("Withdrawal Successful.");
    } catch (error) {
      console.log(error);
    }
  }
}

function listenertransaction(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}......`);
  return new Promise((resolve, reject) => {
    try {
      provider.once(transactionResponse.hash, (transactionReceipt) => {
        console.log(
          `Completed with ${transactionReceipt.confirmations} confirmation/s`
        );
        resolve();
      });
    } catch (error) {
      reject(error);
    }
    //Event looping.
  });
}
