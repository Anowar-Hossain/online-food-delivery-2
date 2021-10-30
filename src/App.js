import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Authprovider from './contexts/Authprovider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Footer from './Pages/Footer/Footer';
import Booking from './components/Booking/Booking';

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
          <PrivetRoute path="/booking/:serviceId">
           <Booking></Booking>
            </PrivetRoute>
          <Route></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Authprovider>
    </div>
  );
}

export default App;
