import "./App.css";
// import Footer from "./Components/Common/Footer";
// import Navbar from "./Components/Common/Navbar";
import Index from "./Components/Home/Index";
import {Routes,Route} from "react-router-dom"
import Layout from './Layout';
import ContactUsForm from './Components/ContactUs';
import GetInTouchForm from './Components/GetInTouchForm';
import PLPindex from './Components/Product/PLPindex';
import ProductDescription from "./Components/Product/ProductDescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact-us" element={<ContactUsForm />} />
        <Route path="get-in-touch" element={<GetInTouchForm />} />
        <Route path="products" element={<PLPindex />} />
        <Route path="products/EV/:id" element={<ProductDescription />} />
      </Route>
    </Routes>
  );
}

export default App;
