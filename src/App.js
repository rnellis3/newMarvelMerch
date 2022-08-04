import './App.css';
import Directory from './components/directory/directory.component';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Checkout from './routes/checkout/checkout.component';
import Authentication from './routes/authentication/authentication.component';
import ProductDetails from './components/product-details/product-details.component';
import Account from './routes/account/account.component';
//import CategoriesPreview from '../categories-preview/categories-preview.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Directory />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='/shop/details' element={<ProductDetails />} />
        <Route path='/account' element={<Account />} />

        {/* <Route path='/shop' element={<CategoriesPreview />} /> */}
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
