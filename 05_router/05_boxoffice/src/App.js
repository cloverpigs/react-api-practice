import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MovieList from './pages/MovieList';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="movie">
            <Route index element={<MovieList/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  
);
}

export default App;
