import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import MovieCompanyDetail from './pages/MovieCompanyDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="movie">
          <Route index element={<MovieList/>}/>
          <Route path=':movieCd' element={<MovieDetail/>}/>
        </Route>
        <Route path="company">
          <Route path=':companyCd' element={<MovieCompanyDetail/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
