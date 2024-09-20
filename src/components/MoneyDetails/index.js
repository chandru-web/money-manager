import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expenses} = moneyDetails

  return (
    <div className="money-list-type-container">
      <div className="money-item balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />
        <div className="money-detail-card">
          <p className="money-type">Your Balance</p>
          <h1 className="money-in-rs">Rs {balance}</h1>
        </div>
      </div>
      <div className="money-item income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo"
        />
        <div className="money-detail-card">
          <p className="money-type">Your Income</p>
          <h1 className="money-in-rs">Rs {income}</h1>
        </div>
      </div>
      <div className="money-item expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />
        <div className="money-detail-card">
          <p className="money-type">Your expenses</p>
          <h1 className="money-in-rs">Rs {expenses}</h1>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
