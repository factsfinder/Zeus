import StellarSdk from 'stellar-sdk';
import axios from 'axios';
import { LEDGER, ACCOUNT } from '../enums.js';

// when live uncomment this
// StellarSdk.Network.usePublicNetwork();

StellarSdk.Network.useTestNetwork();

// use publicNetwork when live
const testNetwork = 'https://horizon-testnet.stellar.org';
const publicNetwork = 'https://horizon.stellar.org';
let stellarServer = new StellarSdk.Server(testNetwork);


class Stellar {
  constructor() {
    this.accountInfo = {};
  }

  static generateKeyPair() {
    const keyPair = StellarSdk.Keypair.random();
    return {
      address: keyPair.publicKey(),
      secret: keyPair.secret()
    }
  }

  // We might not need this in future, but just in case
  static getAddressFromSecret(secret) {
    return StellarSdk.Keypair.fromSecret(secret).publicKey();
  }

  static isValidAddress(address) {
    const accountAddr = address;
    return StellarSdk.StrKey.isValidEd25519PublicKey(accountAddr);
  }

  static createAccount() {
    console.log('creating acount now');
    const keyPair = Stellar.generateKeyPair();
    const address = keyPair.address;
    return axios.get('https://friendbot.stellar.org',
      {
        params: {
          addr: address,
          json: true
        }
      }
    ).then(() => Stellar.loadAccount(address))
      .then((accInfo) => accInfo)
      .catch(err => console.log(err));
  }

  static loadAccount(address) {
    return stellarServer.loadAccount(address).then(accInfo => {
      Stellar.setAccountInfo(accInfo);
      return accInfo;
    });
  }

  static getTransactions(type, value) {
    const process = {
      [LEDGER]: () => {
        return stellarServer.transactions.forLedger(value).call().then(() => {
          // Todo
        }).catch(err => console.log(err));
      },
      [ACCOUNT]: () => {
        return stellarServer.transactions.forAccount(value).call().then(() => {
          // Todo
        }).catch(err => console.log(err));;
      }
    }
  }

  static setAccountInfo(accInfo) {
    this.accountInfo = accInfo;
  }

  static getAccountInfo() {
    return this.accountInfo;
  }

}

export default Stellar;