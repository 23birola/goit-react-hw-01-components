import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ friendsData }) => {
    return (
        <ul className={css.friendsList}>
            {friendsData.map(friend => (
                <li className={css.item} key={friend.id}>
                    <FriendsListItem
                        name={friend.name}
                        url={friend.url}
                    />
                </li>))}
        </ul>
    );
};