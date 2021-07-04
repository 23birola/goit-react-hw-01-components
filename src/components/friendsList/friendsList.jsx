import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

const FriendsList = ({ friendsData }) => {
  return (
    <ul className={css.friendsList}>
      {friendsData.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendsListItem
              name={friend.name}
              url={friend.url}
              is={friend.isOnline}
          />
        </li>))}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
};
  
export default FriendsList;