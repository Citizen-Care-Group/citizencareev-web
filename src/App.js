import "./App.css";
// import Footer from "./Components/Common/Footer";
// import Navbar from "./Components/Common/Navbar";
import Index from "./Components/Home/Index";
import {Routes,Route} from "react-router-dom"
import Layout from './Layout';
import ContactUsForm from './Components/ContactUs';
import GetInTouchForm from './Components/GetInTouchForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact-us" element={<ContactUsForm />} />
        <Route path="get-in-touch" element={<GetInTouchForm />} />
      </Route>
    </Routes>
  );
}

export default App;
