
import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './components/navbar/Header';
import Home from './Views/Home';
import ShoppingCart from './Views/ShoppingCart';
import Login from './Views/Login';
function App() {
  return (
    <Router >
      <Header />
      <div className="container">
        <Switch>
           <Route  exact path="/"  component={Home}/>
           <Route  exact path="/shoppingcart"  component={ShoppingCart}/>
           <Route  exact path="/login"  component={Login}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
