import{ useState, useEffect } from 'react';
import { getMenuList } from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';

function Menu() {

    const [ menuList, setMenuList ] = useState();

    useEffect(
        ()=> {
            /* MenuAPI.js를 만들어서 API 호출 함수를 모아둔다.  */
            setMenuList(getMenuList());
        },
        []
    );



    return (
        <div>
            <h1>메뉴 목록</h1>

            <div className={ boxStyle.MenuBox }>
                { menuList && menuList.map(menu => < MenuItem key={ menu.menuCode } menu={ menu } />)}
            </div>
        </div>  
    );


    
}

export default Menu;