import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
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
