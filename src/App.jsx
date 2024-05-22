import { Route, Switch } from "wouter";
import TitlePage from "./pages/Title";
import CrashPage from "./pages/Crash.jsx";
import AboutPage from "./pages/About.jsx";

// Wouter for routing:
// https://github.com/molefrog/wouter?tab=readme-ov-file#getting-started

function App() {
  return (
    <Switch>
      <Route path="/" component={TitlePage} />
      <Route path="/crash" component={CrashPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}

export default App;
