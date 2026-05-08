


function Hero(){

    return (
      <section className="bg-[#0F0E0D] min-h-screen border border-red-800">
        <div className="max-w-7xl mx-auto  px-6 pt-20">
            <div>
                <p className=" font-medium text-orange-600 text-xl">— DAVV University.</p>
                <p className="text-5xl font-bold text-white mt-6">Every lost thing <br></br>deserves to be 
                 <span className="text-orange-500"> found.</span></p>
                <p className="text-gray-500 mt-3">A modern lost & found platform for the university community.
                    <br></br> Post, search, and reclaim — no paperwork, no queues, no stress.</p>

                <div className="flex flex-row gap-10 mt-10">
                    <button className="px-4 py-4 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300" type="button">I lost something</button>
                    <button className="px-6 py-4 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300" type="button">I found something</button>
                </div>
              
            </div>
        </div>
       
      </section>
    )
}

export default Hero;