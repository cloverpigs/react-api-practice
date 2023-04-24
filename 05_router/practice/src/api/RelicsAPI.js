
const API_KEY = 'a82a6c95-cada-4967-95a6-f930866aa358';


export async function getRelicsList(){
    const url = `http://api.kcisa.kr/API_CNV_048/request?serviceKey=${API_KEY}`;

    const response = await fetch(url, {headers : { 'Content-type' : 'application/json', 'mode': "cors"}});
    console.log(response);
    const data = await response.json();

    return data.items.item;
}