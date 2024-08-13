import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
