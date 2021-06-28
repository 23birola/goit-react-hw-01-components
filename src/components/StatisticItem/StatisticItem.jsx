import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';


export const StatisticItem = ({ name, value }) => {
  return <>
    <span className={css.label}>{name}</span>
    <span className={css.percentage}>{value}</span>
  </>;
};

StatisticItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
