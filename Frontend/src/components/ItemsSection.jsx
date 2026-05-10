import ItemCard from "./ItemCard";
import { getAllLostItems , getAllItems } from "../services/api";
import { useEffect, useState } from "react";



function ItemsSection() {

    const [items, setItems] = useState([]);



    useEffect(() => {

        async function fetchItems() {

            const data = await getAllItems();

            console.log(data);

            setItems(data);
        }

        fetchItems();

    }, []);


    let category = ["Bags & Bagpacks", "Electronics", "Keys & Cards", "Clothing", "Books", "Jewellery", "Other"];
    let locations = ["IIPS", "SCSIT", "ICH", "Canteen", "Temple", "Football Ground"];
    let link = "https://imgs.search.brave.com/lcC_TfnW3N9UTFyW4O_g1-7Q5xxfFcMEoHVtJqi9Ix8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9taW5pbWFsaXN0/LWhlYWRlci1waG90/by13aXRoLXdvbWFu/LXdpdGgtY2xvc2Vk/LWV5ZXMtZnJlZS1p/bWFnZS5qcGVnP3c9/NjAwJnF1YWxpdHk9/ODA";
    return (
        <section className=" max-w-7xl   bg-[#0F0E0D] py-2">
            <div className="flex flex-row px-6 ">
                <div className="flex flex-col text-white w-64 px-3">

                    <div className="flex flex-col gap-3 pt-1">
                        <p className=" text-gray-500 uppercase tracking-wide">STATUS</p>
                        <div className="flex flex-col gap-2 mt-3 px-3">
                            <span>All items</span>
                            <span>Lost</span>
                            <span>Found</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-5">
                        <p className="text-gray-500 uppercase tracking-wide"> CATEGORY</p>
                        <div className="flex flex-col gap-1 mt-3 px-3">
                            {
                                category.map((e) => {
                                    return (
                                        <span>{e}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-5">
                        <p className="text-gray-500 uppercase tracking-wide">LOCATION</p>
                        <div className="flex flex-col gap-1 mt-3 px-3">
                            {

                                locations.map((e) => {
                                    return (
                                        <span>{e}</span>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>
                <div className=" px-10 w-full ">
                    <div className=" text-white flex flex-row justify-between w-full ">
                        <p className="text-xl ">All Items</p>
                        <select className="border h-8 rounded-lg text-white">
                            <option className="text-white bg-black">Newest First</option>
                            <option className="text-white bg-black">Oldest First</option>
                            <option className="text-white bg-black">Most Viewed</option>
                        </select>
                    </div>
                    <div className=" overflow-y-auto h-screen  grid grid-cols-3 gap-6 px-4 pt-4">





                        {

                            items.length > 0 ? (items.map((item, index) => {

                                return (

                                    <ItemCard
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        category={item.category}
                                        location={item.location}
                                        image={item.image}
                                    />

                                )
                            })) : (
                                 <p>No items found</p>
                            )
                        }

                    </div>

                </div>
            </div>

        </section>
    )
}

export default ItemsSection;