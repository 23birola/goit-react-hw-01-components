import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';


export const FriendsListItem = ({ name, url }) => {
  return <>
    <span class={css.status}></span>
    <img class={css.avatar} src={url} alt="" width="48" />
      <p class={css.name}>{name}</p>
  </>;
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string
}


