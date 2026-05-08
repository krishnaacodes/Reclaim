



function ItemsSection(){

    let category = ["Bags & Bagpacks","Electronics","Keys & Cards","Clothing","Books","Jewellery","Other"];
    let locations = ["IIPS","SCSIT","ICH","Canteen","Temple","Football Ground"];

    return (
        <section className="border border-red-500 max-w-7xl h-200 text-white bg-[#0F0E0D] py-2">
            <div className="flex flex-row px-6">
                <div className="flex flex-col">

                    <div className="flex flex-col gap-1 pt-5">
                        <p>STATUS</p>
                          <div className="flex flex-col gap-1 mt-3 px-3">
                            <span>All items</span>
                            <span>Lost</span>
                            <span>Found</span>
                          </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-5">
                        <p> CATEGORY</p>
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
                        <p>LOCATION</p>
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
                <div>

                </div>
            </div>

        </section>
    )
}

export default ItemsSection;