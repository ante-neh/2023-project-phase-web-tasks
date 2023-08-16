import './App.css';
import PostList from './components/PostList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PostList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
