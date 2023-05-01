import { Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Collections from '../../pages/Collections/Collections';
import SalePage from "../../pages/SalePage/SalePage";
import NotFound from '../../pages/NotFound/NotFound';
import './App.scss';


function App() {

  return (
      <div className="App">
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="collections" element={<Collections/>}/>
                  <Route path="sale" element={<SalePage/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
