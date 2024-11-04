import "./App.css";
import HomepageRestaurant from './components/Homepage'
import AboutUs from "./pages/AboutUs/Aboutus";
import ContactUs from "./pages/ContactUs/ContactUs";
import Grocery from "./pages/Grocery/Grocery";
import { Quiz } from "./pages/Grocery/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  OrderOnline from "./pages/OrderHere/OrderHere";
import { MenuTag } from "./pages/Menu/Menu";
import SignUpform from "./components/SignUpform";
import { CartProvider } from "./StoreContext/Storecontext";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      {/* <HomepageRestaurant/>      */}
      <ToastContainer />
      <BrowserRouter> 
      <CartProvider>     
        <Routes>          
          <Route path="/" element={<HomepageRestaurant/>}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/order" element={<OrderOnline />}></Route>
          <Route path="/menu" element={<MenuTag/>}></Route>
          <Route path="/signup" element={<SignUpform/>}></Route> 
          <Route path="/grocery" element={<Grocery/>}></Route> 
          <Route path="/quiz" element={<Quiz/>} />       
         
        </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </>
  );shade
}

export default App;
