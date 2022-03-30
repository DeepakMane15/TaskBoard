import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Authenticate/login';
import Signup from './components/Authenticate/signup';
import Home from './components/home';

const App = () => {


    return (
      <div>
        
        <Router>
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />

  
          </Switch>
        </Router> 
       
  
      </div>
    );
  }
  


export default App;