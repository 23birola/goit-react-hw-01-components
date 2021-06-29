import './App.css';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic'
import { FriendsList } from './components/FriendsList/FriendsList';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json'


function App() {
  return (<>
      <section>
        <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
          />
      </section>
    
      <Statistic data={statisticalData} />
      
      <section>
      <FriendsList friendsData={friends.friendsData}/>
      </section>
    </>
  );
}

export default App;
