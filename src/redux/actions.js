import Stellar from '../stellar/Stellar.js';

export const UPDATE_ACCOUNT = 'update account';

export function createAccount() {
  return (dispatch, getState) => {
    return Stellar.createAccount().then((accountInfo) => {
      console.log(accountInfo);
      dispatch({
        type: UPDATE_ACCOUNT,
        data: accountInfo
      })
    });
  };
}