import './App.css';
import PostList from './components/PostList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='/:page?' element={<PostList />} />
           <Route path="/search" element={<SearchBar />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
