import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router className="App-Router">
        <NavBar />
        <Switch>
          <Route 
            exact 
            path="/">
              <Home/>
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
