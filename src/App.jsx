import { Route, Switch } from "wouter";
import TitlePage from "./pages/Title";
import CrashPage from "./pages/Crash.jsx";
import AboutPage from "./pages/About.jsx";
import EssayPage from "./pages/Essay.jsx";
import InfographicPage from "./pages/Infographic.jsx";
import AudioPage from "./pages/Audio.jsx";

// Wouter for routing:
// https://github.com/molefrog/wouter?tab=readme-ov-file#getting-started

function App() {
  return (
    <Switch>
      <Route path="/" component={TitlePage} />
      <Route path="/crash" component={CrashPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/essay" component={EssayPage} />
      <Route path="/audio" component={AudioPage} />
    </Switch>
  );
}

export default App;
