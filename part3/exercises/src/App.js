import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyGear from './components/MyGear';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Playing Drums</h1>
      <HobbyIntroduction />
      <MyGear />
    </div>
  );
}



export default App;
