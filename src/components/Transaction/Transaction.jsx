import PropTypes from 'prop-types';
import css from './Transaction.module.css'

const Transaction = ({type, amount, currency}) => {
    return (
    <>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
    </>
    );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

export default Transaction;

