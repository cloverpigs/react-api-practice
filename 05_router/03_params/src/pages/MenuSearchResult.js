import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMenu } from "../api/MenuAPI";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";

function MenuSearchResult() {

    /* 쿼리스트링 형태로 전달 된 값은 useSearchParams hook을 이용하여 전달 받을 수 있다. 
    쿼리스트링 : ?menuName=김&menuPrice=1  
    여러값을 가져오기 때문에 배열로 반환을 받아서 꺼내 사용해야한다. */
    const [searchParams] = useSearchParams();

    /* 쿼리 스트링의 key 값을 get 함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const menuName = searchParams.get('menuName');

    console.log(menuName);
    console.log(searchParams.toString());

    /* 검색어를 전달하여 해당 이름이 포함 된 메뉴를 API 호출을 통해 배열로 반환 받는다.
    검색어로 1개만 오는게 아니라 여러개가 오기 때문에 배열로 반환 받는다.  */

    const[ menuList, setMenuList ] = useState();

    useEffect(
        ()=>{
            setMenuList(getSearchMenu(menuName));
        },
        []
    );
        
    console.log(menuList);

    return (
        <div>
            <h3>검색 된 메뉴 </h3>
            <div className={ boxStyle.MenuBox }>
                {menuList && menuList.map(menu => <MenuItem key={menu.menuCode} menu={ menu }/>)}
            </div>
        </div>
    );
}

export default MenuSearchResult;