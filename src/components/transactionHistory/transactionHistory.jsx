import PropTypes from 'prop-types';

import Transaction from '../Transaction/Transaction';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.headRow}>
        <th className={css.cell}>Type</th>
        <th className={css.cell}>Amount</th>
        <th className={css.cell}>Currency</th>
      </tr>
    </thead>

    <tbody>
          {items.map((item) =>
          <tr className={css.row} key={item.id}>
          <Transaction
              type={item.type}
              amount={item.amount}
              currency={item.currency}
          />
          </tr>
      )}
    </tbody>
  </table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ),
};

export default TransactionHistory;