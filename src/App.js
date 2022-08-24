// import  Header from "./components/Header"
// import Button from "./components/Button"
// import {Image} from "./components/Image"
// import Navbar from "./components/Navbar"
// import Practice from "./components/Practice"

// import Products from "./components/Products";
// import TaskManager from "./components/TaskManager";
// import ProductList from "./components/ProductList";
// import Spinner from "./components/Spinner";

// function App(){
//   return(
//     <div>
//      <Navbar />
//     <Header />
//     <Button label= "Add to Cart" />
//     <Button label= "Read.more..." />
//     <Button label= "Register" />
//     <Button label= "Login" />
//     <Image /> 
//     <Practice /> 
//     </div>
//   ) ;
// }

// import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskManager from "./pages/TaskManager";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";


function App(){
  return(
     <BrowserRouter>
     <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
     </BrowserRouter>
  );
};

export default App;