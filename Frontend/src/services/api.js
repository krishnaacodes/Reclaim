
const api = "http://localhost:3000/api/v1";



export async function getAllFoundItems(){
 
     const response = await fetch(`${api}/found/getAllFoundItem`);

     const result = await response.json();

     console.log(result);

     return result;

}