import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Botique from "./pages/Boutique";
import Contacts from "./pages/Contacts";
import Entrypage from "./pages/Entrypage";
import Gallery from "./pages/Gallery";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Header/>
        <Routes id="page-wrap">
          <Route exact path="/" element={<Entrypage/>}/>
          <Route path="/products/" element={<Catalog/>}/>
          <Route path="/boutique/" element={<Botique/>}/>
          <Route path="/gallery/" element={<Gallery/>}/>
          <Route path="/contacts/" element={<Contacts/>}/>
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
} 

export default App;
