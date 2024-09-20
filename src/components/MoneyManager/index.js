import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
    historyList: [],
  }

  addData = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newHistoryList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryList],
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {balance, income, expenses, historyList} = this.state
    const moneyDetails = {balance, income, expenses}

    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails moneyDetails={moneyDetails} />
        <div className="form-history-container">
          <div className="transaction-details-container">
            <form onSubmit={this.addData}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount">AMOUNT</label>
                <br />
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="incomeType">TYPE</label>
                <br />
                <select id="incomeType" onChange={this.onChangeType}>
                  {transactionTypeOptions.map(eachOption => (
                    <option key={eachOption.optionId}>
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-list">
              <li className="header">
                <h1>TITLE</h1>
                <h1>AMOUNT</h1>
                <h1>TYPE</h1>
              </li>
              <hr />
              {historyList.map(eachHistory => (
                <TransactionItem
                  transactionDetails={eachHistory}
                  key={eachHistory.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
