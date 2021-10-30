import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Authprovider from './contexts/Authprovider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
    <Authprovider>
    <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/details/:detailsId">
           <Details></Details>
          </PrivetRoute>
          <Route></Route>
        </Switch>
      </Router>
    </Authprovider>
    </div>
  );
}

export default App;
