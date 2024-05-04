import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorRegister from './vendor/VendorRegister';
import Index from './vendor/Index';
import VendorLoginpage from './vendor/VendorLoginpage';
import Vendorhomepage from './vendor/Vendorhomepage';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendorRegister />}></Route>
          <Route path='/login' element={<VendorLoginpage />}></Route>
          <Route path='/home' element={<Vendorhomepage />}></Route>
          <Route path='/index' element={<Index />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
