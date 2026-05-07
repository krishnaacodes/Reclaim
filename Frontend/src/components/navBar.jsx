



function Navbar(){
  
    return (
    
    <nav className="bg-[#0F0E0D] ">
        <div className = " h-16 flex flex-row justify-between px-6 items-center max-w-7xl mx-auto">
            <a href="#" className="text-xl font-bold text-white">
                Reclaim<span className="text-orange-600">.</span>
           </a>
            <ul className ="flex flex-row list-none text-sm gap-6 text-white">
                <li><a href="#">Browse</a></li>
                <li><a href="#">Lost items</a></li>
                <li><a href="#">Found items</a></li>
            </ul>
            <div className = " flex flex-row gap-6">
                <button   className="px-4 py-2 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300"
                                          type = "button">Sign in</button>
                <button  className="px-4 py-2 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300"
                           type = "button">Report item
                           </button>
            </div>
        </div>
    </nav>
   
    )
}


export default Navbar