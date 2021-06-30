import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';


export const FriendsListItem = ({ name, url }) => {
  return <>
    <span className={css.status}></span>
    <img className={css.avatar} src={url} alt="" width="48" />
      <p className={css.name}>{name}</p>
  </>;
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string
}


