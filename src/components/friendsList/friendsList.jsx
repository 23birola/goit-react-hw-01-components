import { FriendsListItem } from '../FriendsListItem/FriendsListItem'
import css from './FriendsList.module.css';

export const FriendsList = ({ friendsData }) => {
    return <ul className={css.friendList}>
        {friendsData.map(friendData => (
            <li className={css.item} key={friendData.id}>
                <FriendsListItem
                    name={friendData.name}
                    url={friendData.url} />
            </li>
        ))}
    </ul>
}
