import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/main';
import About from './pages/About';
import Menu from './pages/menu';
import MenuDetails from './pages/MenuDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={ <Layout/>}>
            <Route index element={ <Main/> }></Route>
            <Route path='about' element={ <About/> }></Route>
            
            <Route path="menu">
              <Route index element={ <Menu/> }></Route>
              <Route path=":menuCode" element={<MenuDetails/>}></Route>
            </Route>

          </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
