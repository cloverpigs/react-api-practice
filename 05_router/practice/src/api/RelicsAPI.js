
const API_KEY = 'a82a6c95-cada-4967-95a6-f930866aa358';


export async function getRelicsList(){
    const url = `http://api.kcisa.kr/API_CNV_048/request?serviceKey=${API_KEY}`;

    const response = await fetch(url, { 'Content-type' : 'application/json' });;
    const data = await response.json();

    console.log(data);
    return data.items.item;
}