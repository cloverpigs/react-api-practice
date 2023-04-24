
const API_KEY = '25348fd2811de57d9971343868bfdfbd';

/* 어제 날짜를 포맷에 맞춰서 반환하는 함수 */
const getDateFormat= () => {
    
    const today = new Date();

    return `${today.getFullYear()}${today.getMonth()<10 ? '0'+(today.getMonth()+1):(today.getMonth()+1)}${today.getDate()-1}`;
    
}



/* 일별 박스오피스 정보 조회 - 어제 기준 10개 영화 조회 */
export async function getMovieList(){

    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/`+
    `searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${getDateFormat()}`;

    const response = await fetch(url);
    const data = await response.json();


    return data.boxOfficeResult.dailyBoxOfficeList;

}