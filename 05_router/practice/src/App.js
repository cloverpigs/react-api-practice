import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import RelicsList from './pages/RelicsList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="relicsList">
          <Route index element={<RelicsList/>}/>

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
