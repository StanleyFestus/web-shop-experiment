import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router className="App-Router">
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
