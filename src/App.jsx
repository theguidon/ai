import { Route, Switch } from 'wouter';
import TitlePage from './pages/Title';

// Wouter for routing:
// https://github.com/molefrog/wouter?tab=readme-ov-file#getting-started

function App() {
  return (
    <Switch>
      <Route path="/" component={TitlePage} />
    </Switch>
  );
}

export default App;
