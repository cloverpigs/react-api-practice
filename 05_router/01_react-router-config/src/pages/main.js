/* Link 컴포넌트를 통한 다른 페이지 링크 설정  */
import { Link } from 'react-router-dom';

function Main() {

    return(
        <div>
            <h1>메인</h1>
            <nav>
                {/* Link의 to 속성으로 주소를 변경, to='path' 로 작성 
                <a href="path"></a> 로 view에 나타난다.*/}
                <Link to="/">HOME</Link>&nbsp;
                <Link to="/about">소개</Link>&nbsp;
                <Link to="/menu">메뉴목록</Link>
            </nav>
        </div>
    );
}

export default Main;