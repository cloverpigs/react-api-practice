import{ useState, useEffect } from 'react';
import { getMenuList } from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

function Menu() {

    const [ menuList, setMenuList ] = useState();
    const [ searchValue, setSearchValue ] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=> {
            /* MenuAPI.js를 만들어서 API 호출 함수를 모아둔다.  */
            setMenuList(getMenuList());
        },
        []
    );
    
    const onClickHandler = () => {
        /* react-router-dom 의 useNavigate hook을 이용하여 링크를 이동시킨다. 
        인자로 전달 되는 값으로 url주소가 변경된다. (풀네임사용)*/
        navigate(`/menu/search?menuName=${ searchValue }`);
    }


    return (
        <div>
            <h1>메뉴 목록</h1>

            <div>
                <input 
                    type="search"
                    name="menuName"
                    value={ searchValue }
                    onChange={ (e) => setSearchValue(e.target.value) }
                />
                <button
                    onClick={ onClickHandler }
                >
                    검색
                </button>
            </div>

            <div className={ boxStyle.MenuBox }>
                { menuList && menuList.map(menu => < MenuItem key={ menu.menuCode } menu={ menu } />)}
            </div>
        </div>  
    );


    
}

export default Menu;