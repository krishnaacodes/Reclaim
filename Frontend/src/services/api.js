
const api = "http://localhost:3000/api/v1";



export async function getAllLostItems() {

    const response = await fetch(`${api}/lost/getAllLostItem`);

    const result = await response.json();

    console.log(result);

    return result;

}



export async function reportItem(title, description, category, status, location , image) {


    let response = "";

    
            

    if (status.toLowerCase() === "lost") {

        response = await fetch(
            `${api}/lost/createLostItem`,
            {
                method: "POST",


                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    {
                        title,
                        description,
                        image,
                        category,
                        status,
                        location
                    }
                )
            }

        )

    } else {

        response = await fetch(
            `${api}/found/createFoundItem`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    {
                        title,
                        description,
                        image,
                        category,
                        status,
                        location
                    }
                )
            }

        )

    }

    const result = await response.json();



    console.log(result);


    return result;


}