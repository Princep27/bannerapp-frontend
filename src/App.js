import { HashRouter, Route } from 'react-router-dom';
import Banner from './Banner';
import Dashboard from './Dashboard';

function App() {
  return (
    <HashRouter>
      <Route path="/" component={Banner} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </HashRouter>
  );
}

export default App;
