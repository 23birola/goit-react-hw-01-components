import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';


const FriendsListItem = ({ name, url, isOnline }) => {
    return <>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img className={css.avatar} src={url} alt={css.name} width="48" height="48"/>
      <p className={css.name}>{name}</p>
  </>;
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default FriendsListItem;
