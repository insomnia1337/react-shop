import React from 'react';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import {Switch, Route} from 'react-router-dom';
import Modal from './components/Modal'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
