import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./StoreContext/Storecontext";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./StoreContext/UserContext";
import "react-toastify/dist/ReactToastify.css";

const HomepageRestaurant = lazy(() => import("./components/Homepage"));
const AboutUs = lazy(() => import("./pages/AboutUs/Aboutus"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Grocery = lazy(() => import("./pages/Grocery/Grocery"));
const Quiz = lazy(() => import("./pages/Grocery/Quiz").then((module) => ({ default: module.Quiz })));
const OrderOnline = lazy(() => import("./pages/OrderHere/OrderHere"));
const MenuTag = lazy(() => import("./pages/Menu/Menu").then((module) => ({ default: module.MenuTag })));
const SignUpform = lazy(() => import("./components/SignUpform"));

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <CartProvider>
          <UserProvider>
            <Suspense fallback={<div className="text-center p-5">Loading page...</div>}>
              <Routes>
                <Route path="/" element={<HomepageRestaurant />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/order" element={<OrderOnline />} />
                <Route path="/menu" element={<MenuTag />} />
                <Route path="/signup" element={<SignUpform />} />
                <Route path="/grocery" element={<Grocery />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </Suspense>
          </UserProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
