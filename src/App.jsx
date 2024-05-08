import { Route, Switch } from 'wouter';
import TitlePage from './pages/Title';

function App() {
  return (
    <Switch>
      <Route path="/" component={TitlePage} />
    </Switch>
  );
}

export default App;
