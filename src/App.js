import './App.css';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import Index from './Components/Home/Index';
// import TestHome from './Components/Home/TestHome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index/>
      <Footer/>
    </div>
  );
}

export default App;
