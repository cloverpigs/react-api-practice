import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/main';
import About from './pages/About';
import Menu from './pages/menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={ <Layout/>}>
            <Route index element={ <Main/> }></Route>
            <Route path='about' element={ <About/> }></Route>
            <Route path="menu" element={ <Menu/> }></Route>
          </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
