
import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './components/navbar/Header';
import Home from './Views/Home';
import ShoppingCart from './Views/ShoppingCart';
import Login from './Views/Login';
import ProductDetails from './Views/ProductDetails';
import Appfooter from './components/navbar/Appfooter';
import Register from './Views/Register';
import Orders from './Views/Orders'
import AllOrders from './Views/AllOrders';
function App() {
 
  return (
    <Router >
      <Header  />
      
      <div className="container mt-5 page-container">
        <Switch>
           <Route  exact path="/"  component={Home}/>
           <Route  exact path="/details/:id"  component={ProductDetails}/>
           <Route  exact path="/shoppingcart"  component={ShoppingCart}/>
           <Route  exact path="/allcarts"  component={AllOrders}/>
           <Route  exact path="/login"  component={Login}/>
           <Route  exact path="/register"  component={Register}/>
           <Route  exact path="/myorders"  component={Orders}/>
        </Switch> 
        
      </div>
     <Appfooter />
    </Router>
  );
}

export default App;
