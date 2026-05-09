



function ItemCard(props) {
    return (
        <div className=" bg-transparent border border-orange-400 h-90 px-4 py-4 rounded-xl">
            <img src={props.image} alt="not found" className="rounded-xl h-50"></img>
            <p className="text-xl text-white">{props.title}</p>
            <p className="text-gray-500 text-xl">{props.description}</p>
            <ul className="flex flex-row gap-5 mt-2 ">
                <li className="text-gray-400">{props.location}</li>
                <li className="text-gray-400">{props.category}</li>
            </ul>
             <div className="flex flex-row gap-3 mt-2">
                 <button className="px-2 py-1 bg-white
                           text-black rounded-lg hover:bg-gray-200
                           transition duration-300">View Details</button>
                 <button className="px-6 py-1 bg-white
                           text-black rounded-lg hover:bg-gray-200
                          transition duration-300">Claim</button>
             </div>

        </div>
    )
}



export default ItemCard;