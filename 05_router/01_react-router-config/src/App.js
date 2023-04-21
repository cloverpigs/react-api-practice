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
/* export default 명칭 :  명칭이라는 이름으로 해당 funtion을 으로 내보낸다.
해당 모듈에는 하나의 객체(변수, 함수, 클래스등)만 있다는 의미로 해당 모듈의 전체 객체를 export 한다는
의미를 가지고 있다 ( 하나의 객체이기 때문에 전체 객체여도 1개 만이다.
명칭으로 정한 이름으로 import가 가능하다. 

export 객체명 :  해당 모듈의 2개이상의 객체가 있는 의미로 특정 객체만 export를 할수 있다. 
이름은 수정이 불가능하여 해당 객체 명으로 전달해야 한다. */
export default App;
