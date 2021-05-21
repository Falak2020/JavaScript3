
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
import AllOrders from './Views/Admin/AllOrders';
import UsersOrders from './Views/Admin/UsersOrders';

import UserContextProvider  from './contexts/userContext';

import { ProtectedRoute } from './Routes/ProtectedRoute';
import { AdminProtectedRoute } from './Routes/AdminProtectedRoute';
import AllordersDetail from './Views/Admin/AllordersDetail';
import NotFound from './Views/NotFound';
import AddProduct from './Views/Admin/AddProduct';
import AllProducts from './Views/Admin/AllProducts';



function App() {
 
  return (
    <Router >
      <UserContextProvider>
        <Header  />
      </UserContextProvider>
      
      
      <div className="container mt-5 page-container">
        <Switch>
           <Route  exact path="/"  component={Home}/>
           <Route  exact path="/details/:id"  component={ProductDetails}/>
           <Route  exact path="/shoppingcart"  component={ShoppingCart}/>
           {/* <Route  exact path="/allcarts"  component={AllOrders}/> */}
           <AdminProtectedRoute  exact path="/allcarts"  component={AllOrders}/>
           <Route  exact path="/login"  component={Login}/>
           <Route  exact path="/register"  component={Register}/>
           <Route  exact path="/allordersdetail"  component={AllordersDetail}/>
           <AdminProtectedRoute  exact path="/addProduct"  component={AddProduct}/>
           <AdminProtectedRoute  exact path="/allProducts"  component={AllProducts}/>
           <Route  exact path="/usersorders"  component={UsersOrders}/>
           <ProtectedRoute  exact path="/myorders"  component={Orders}/>
           <Route path="*" component={NotFound} />
        </Switch> 
        
      </div>
     <Appfooter />
    </Router>
  );
}

export default App;
