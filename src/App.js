import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Navigation from './components/navigation/navigation.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import ItemInfoPage from './pages/item-info/item-info.component.jsx';
import SignInPage from './pages/sign-in/sign-in.component.jsx';
import RegisterPage from './pages/register/register.component.jsx';
import HomePage from './pages/home-page/home-page.component.jsx';
import Profile from './pages/profile/profile.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Navigation />
      </Switch>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/trade">
          <HomePage />
        </Route>
        <Route exact path="/sales">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/home">
          <ItemInfoPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
