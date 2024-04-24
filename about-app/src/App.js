// import './App.css';

import CategorizeList from "./CategorizeList";
import DisplayList from "./DisplayList";
import RespondToEvent from "./RespondToEvent";
import SeparateCounter from "./SeparateCounter";
import UpdateScreen from "./UpdateScreen";
import UpdateTogether from "./UpdateTogether";

const user = {
  name: 'Test User',
  // imageUrl: 'https://i.imgur.com/yX0vd0Ss.jpg',
  imageUrl: './avatar.png',
  imageSize: 100,
};

function App() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
    className="avatar"
    src={require('./avatar.png')}
    alt={'Photo of ' + user.name}
    style = {{
      width: user.imageSize,
      height: user.imageSize
    }}
    />
    <DisplayList />
    <CategorizeList />
    <RespondToEvent />
    <br /><br />
    <UpdateScreen />
    <br /><br />
    <SeparateCounter />
    <br /><br />
    <UpdateTogether />
    </>

  );
}

export default App;
