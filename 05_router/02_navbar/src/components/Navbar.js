// import { Link } from 'react-router-dom';

// function Navbar() {

//     return (

//         <div>
//             <ul>
//                 <li><Link to="/">HOME</Link></li>
//                 <li><Link to="/about">소개</Link></li>
//                 <li><Link to="/menu">메뉴목록</Link></li>
//             </ul>
//         </div>
        
//     );
// }

// export default Navbar;

/* NavLink 활용
Link 컴포넌트와 거의 유사하게 사용할 수 있다. 
단, 현재 Nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나
클래스 이름을 변경할 수 있다.  */
import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle ={
        backgroundColor : 'orangered'
    };
    /* <NavLink 속성으로 style이 있고 인자로 함수를 전달한다. 
    함수의인자는 isActive로 Active여부에 따라 false, true를 반환 따로 정의하지 않아도 정의 되어있는 값이다. */
    return (

        <div>
            <ul>
                <li><NavLink to="/" style={({ isActive })=> isActive ? activeStyle : undefined }>HOME</NavLink></li>
                <li><NavLink to="/about" style={({ isActive })=> isActive ? activeStyle : undefined }>소개</NavLink></li>
                <li><NavLink to="/menu" style={({ isActive })=> isActive ? activeStyle : undefined }>메뉴목록</NavLink></li>
            </ul>
        </div>
        
    );
}

export default Navbar;