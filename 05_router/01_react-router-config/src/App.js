/* BrowserRouter 컴포넌트를 이용한 라우팅 설정 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import About from './pages/About';
import Menu from './pages/menu';

function  App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          {/* 루트 경로 (path="/")로 요청 시 Main 컴포넌트를 보여준다.*/}
          {/*<Route path="/" element={ <Main/> } />*/}

          {/* path 대신 인덱스로 설정해두면 루트 요청과 동일하다. */}
          <Route index element={ <Main/> }/>
          
          <Route path="/about" element={ <About/> } />
          <Route path="/menu" element={ <Menu/> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}
/* export default 명칭 :  명칭이라는 이름으로 해당 funtion을 으로 수출한다.
하나의 함수만 있을경우 사용*/ 
export default App;
