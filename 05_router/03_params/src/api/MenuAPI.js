import menus from '../data/menu-detail.json';

/* 전체 메뉴 리스트 조회 API */
export function getMenuList() {


    return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한 개의 상세 내용 조회  */
export function getMenuDetail( menuCode ) {
    /* 전달 받은 menuCode는 문자열이니 parseInt로 숫자로 반환, 배열로 반환되지만
    [0]으로 해서 객체로 반환 menu = [ {} ] 으로 되니 그냥 보내면 배열로 되어 
    배열을 선택해서 보내면 {} 객체로 나가게 되어 처리하기 쉬워져 [0]을 사용하여 
    리턴 시킨다. ( filter로 1개만 나오도록 하여 0번 인덱스로 설정하였다. */
    return menus.filter( menu => menu.menuCode === parseInt(menuCode))[0];
}

/* 메뉴명 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회 
match 함수 : 전달 되는 인자(문자열)가 해당 문자열에 포함되어 있는지 확인하는 메소드 */
export function getSearchMenu( menuName ) {

    return  menus.filter( menu => menu.menuName.match(menuName));
}
