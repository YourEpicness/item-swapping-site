import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Logo from './components/header/header.component.jsx';
import Navigation from './components/navigation/navigation.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Navigation />
      </Switch>
    </div>
  );
}

export default App;
