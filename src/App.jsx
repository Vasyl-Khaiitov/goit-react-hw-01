import Profile from './components/Profile/Profile';
import userData from './data/userData.json';
import FriendList from './components/FriendList/Friendlist';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
