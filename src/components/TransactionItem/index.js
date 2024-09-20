import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type, id} = transactionDetails

  return (
    <li className="list-item">
      <div className="history-item">
        <h1>{title}</h1>
        <h1>{amount}</h1>
        <h1>{type}</h1>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
