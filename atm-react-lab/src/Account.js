import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
      super(props)
      this.state = {
        balance: 0
      }
  }
  deposClick(e) {
    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }
  withdClick(e) {
    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    let newBalance = this.state.balance - amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }
  render() {
    let balanceClass = 'balance';
    if(this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.deposClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.withdClick(e)} />
      </div>
    )
  }
}
