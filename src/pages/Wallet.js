import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import ExpenseForm from '../components/ExpenseForm';

import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="container-wallet">
        <HeaderWallet />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
