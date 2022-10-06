
import './App.css';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk";
import {useState} from "react"; 


const providerOptions = {
coinbasewallet: {
  package: CoinbaseWalletSDK,
  option: {
    appName: "Web3Modal Demo",
    infuraID: {3: "https://ropsten.infura.io/v3/fefnefnefse"}
  }
}


}

function App() {
  const [web3Provider, setWeb3Provider]= useState(null);

async function connectWallet(){

try{

let web3Modal = new Web3Modal( {
  catceProvider: false,
  providerOptions,

});

const web3ModalInstance = await web3Modal.connect();
const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
if(web3ModalProvider){
   setWeb3Provider(web3ModalProvider);

}
console.log(web3ModalProvider);
} catch(error){

  console.error(error);
}

}



  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3Modal Connection</h1>
     {web3Provider==null ? (
         <button onClick={connectWallet}>
         Connect Wallet
         </button>
     ) : (
      <div>
      <p>connected!</p>
      <p>Address: {web3Provider.provider.selectedAddress}</p>
      </div>
     )
     }
        
      </header>
    </div>
  );
}

export default App;
