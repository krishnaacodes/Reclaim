



function ItemsSection(){

    let category = ["Bags & Bagpacks","Electronics","Keys & Cards","Clothing","Books","Jewellery","Other"];
    let locations = ["IIPS","SCSIT","ICH","Canteen","Temple","Football Ground"];

    return (
        <section className=" max-w-7xl text-white  bg-[#0F0E0D] py-2">
            <div className="flex flex-row px-6">
                <div className="flex flex-col  w-50 px-3">

                    <div className="flex flex-col gap-1 pt-1">
                        <p className="text-[13px]">STATUS</p>
                          <div className="flex flex-col gap-2 mt-3 px-3">
                            <span>All items</span>
                            <span>Lost</span>
                            <span>Found</span>
                          </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-5">
                        <p className="text-[13px]"> CATEGORY</p>
                        <div className="flex flex-col gap-1 mt-3 px-3">
                            {
                                category.map((e)=>{
                                    return(
                                        <span>{e}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-5">
                        <p className="text-[13px]">LOCATION</p>
                        <div className="flex flex-col gap-1 mt-3 px-3">
                            {

                                locations.map((e)=>{
                                    return (
                                        <span>{e}</span>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>
                <div className=" px-10 w-full "> 
                    <div className="flex flex-row justify-between w-full ">
                        <p className="text-xl ">All Items</p>
                        <select class="border h-8 rounded-lg text-white">
                          <option className="text-white bg-black">Newest First</option>
                          <option className="text-white bg-black">Oldest First</option>
                          <option className="text-white bg-black">Most Viewed</option>
                        </select>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ItemsSection;