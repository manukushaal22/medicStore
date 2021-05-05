import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Switcher from "./login/Switcher";
import Home from "./Home/Home";
import Cart from "./cart/Cart";


function App() {
    let checkLoginStatus = () => {
        if(localStorage.getItem("signedInUser") !== null && localStorage.getItem("signedInUser") !== "null") {
            return "/home";
        }
        return "/login";
    }
  return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/cart' component={Cart}/>
              <Route exact path='/login' component={Switcher}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path="/">
                  <Redirect to={checkLoginStatus()} />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
