


function Hero({openModal}){

    return (
      <section className="bg-[#0F0E0D] min-h-screen ">
        <div className="max-w-7xl mx-auto  px-6 pt-30">
            <div>
                <p className="max-w-lg font-medium text-orange-600 text-sm tracking-wide uppercase">— DAVV University.</p>
                <p className="max-w-lg text-5xl font-bold text-white mt-6">Every lost thing <br></br>deserves to be 
                 <span className="text-orange-500"> found.</span></p>
                <p className="max-w-lg text-gray-500 mt-3">A modern lost & found platform for the university community.
                    <br></br> Post, search, and reclaim — no paperwork, no queues, no stress.</p>

                <div className="flex flex-row gap-4 mt-10">
                    <button className="px-4 py-4 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300" type="button" onClick={openModal}>I lost something</button>
                    <button className="px-4 py-4 bg-[#E07848]
                          text-white rounded-lg hover:bg-[#c9653a]
                          transition duration-300" type="button" onClick={openModal}>I found something</button>
                </div>
              
            </div>
        </div>
       
      </section>
    )
}

export default Hero;