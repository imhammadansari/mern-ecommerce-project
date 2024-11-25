import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/login';
import Products from './pages/Products';
import Shop from './pages/Shop';
import AddtoCart from './pages/AddtoCart';
import Logout from './pages/Logout';
import Checkout from './pages/Checkout';
import OrderDetails from './pages/OrderDetails';
import HomePage from './pages/HomePage';
import ReturnPolicy from './pages/ReturnPolicy';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetails from './pages/ProductsDetails';


function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element = {<Navigate to="/home" />} />
        <Route path='/home' element = {<HomePage/>} />  
        <Route path='/login' element = {<Login/>} />  
        <Route path='/signup' element = {<Signup/>} />  
        <Route path='/login' element = {<Login />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
        <Route path='/products' element = {<Products />} />
        <Route path='/items/:productid' element={<ProductDetails />} />
        <Route path='/returnpolicy' element = {<ReturnPolicy />} />
        <Route path='/shop' element = {<Shop />} />
        <Route path='/cart' element = { <AddtoCart /> } />
        <Route path='/checkout' element = { <Checkout /> } />
        <Route path='/orderdetails' element = { <OrderDetails /> } />
        <Route path='/logout' element = { <Logout /> } />
      </Routes>

    </div>
  );
}

export default App;
