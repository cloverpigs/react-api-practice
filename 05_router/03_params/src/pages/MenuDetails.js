import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenuDetail } from "../api/MenuAPI";


function MenuDetails() {

    /* useParams hook을 이용하여 PathVariable 값을 읽어올 수 있다. 
    이 때 구조분해할당 하는 이름은 route에 설정한 :menuCode <- 가 이름으로 설정되어야 한다.*/
    const { menuCode } = useParams();  

    /* PathVariable의 값으로 menuCode가 넘어오게 되므로 해당 고유 값을 통해 
    메뉴의 상세 정보를 조회하는 API를 호출한다. */

    const [ menu, setMenu ] = useState({
        menuName : '',
        menuPrice : 0,
        categoryName : '',
        detail : {}
    });
    
    useEffect(
        () => {
            setMenu(getMenuDetail(menuCode));
        },
        []
    );

    console.log(menu);
    /* 첫 랜더링시 useEffect가 실행되기 전이여서 menu에 값이 없어 오류가 생긴다. 
    이 경우 해결할려면 
    1. 조건부 랜더링 ( menu&& meunu.menuName ) 
    2. useState에 초기값을 설정 */

    /* img 태그의 alt 속성 : 사진이 없으면 대신 나오는 부분*/
    return  (
        <>
            <h2> 메뉴 상세 페이지 </h2>
            <h3> 메뉴 이름 : { menu.menuName } </h3>
            <h3> 메뉴 가격 : { menu.menuPrice } </h3>
            <h3> 메뉴 종류 : { menu.categoryName } </h3>
            <h3> 메뉴 설명 : { menu.detail.description } </h3>
            <img src={ menu.detail.image } style={{ maxWidth : 500 }} alt={menu.menuName}/>
        </>
    );
}

export default MenuDetails;