import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list_item}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.friend_item}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}
