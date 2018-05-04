import StellarSdk from 'stellar-sdk';
import axios from 'axios';

class Stellar {
  constructor() {
    StellarSdk.Network.useTestNetwork();
    // Configure StellarSdk to talk to the horizon instance hosted by Stellar.org
    // To use the live network, set the hostname to 'horizon.stellar.org'
    let server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
  }

  static createAccount() {
    const keyPair = StellarSdk.Keypair.random();
    return axios.get('https://friendbot.stellar.org',
      {
        params: {
          addr: keyPair.publicKey(),
          json: true
        }
      }).then((res) => res.data).catch(err => console.log(err));
  }
}

export default Stellar;