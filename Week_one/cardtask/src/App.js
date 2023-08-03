import './App.css';
import { Card } from './components/Card';

function App() {
  const user1 = {
    name:"arsenal",
    image:"https://i.imgur.com/7vQD0fPs.jpg",
    bio:"JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. ",
    website:"www.youtube.com"
  }


  return (
    <div className="App">
      <Card user = {user1}/>
    </div>
  );
}

export default App;
