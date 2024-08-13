import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './Banner';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Banner} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
