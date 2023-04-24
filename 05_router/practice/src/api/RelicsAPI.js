const API_KEY = 'a82a6c95-cada-4967-95a6-f930866aa358';

export async function getRelicsList() {
  const url = `http://api.kcisa.kr/API_CNV_048/request?serviceKey=a82a6c95-cada-4967-95a6-f930866aa358&numOfRows=10&pageNo=2`;

  const response = await fetch(url, 
    {
        mode : 'no-cors' ,
        headers : { 'Content-type' : 'application/json' }
    }
    );
  const data = 'd';

  return response;
}