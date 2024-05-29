import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Getsingalproduct from "./pages/Getsingalproduct";
import Userlogin from "./componets/Userlogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="getsingaldata/:id" element={<Getsingalproduct />} />
            <Route path="login" element={<Userlogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
