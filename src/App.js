// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/GamePage" element = {<GamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
