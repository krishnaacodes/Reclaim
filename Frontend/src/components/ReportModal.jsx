import { useState } from 'react';

function ReportModal({ closeModal }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("category");
    const [status, setStatus] = useState("");
    const [location, setLocation] = useState("");



    const submitHandler = async (e) => {

        e.preventDefault();

        console.log(title);
        console.log(description);
        console.log(category);
        console.log(status);
        console.log(location);



    };



    return (
        <div className="fixed inset-0 bg-black/60">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-[#1A1918] w-[500px] rounded-xl  pt-15 px-6 text-white ">
                    <h2 className="text-2xl font-bold ">
                        Report Item
                    </h2>
                    <form  onSubmit={submitHandler}  className="flex flex-col gap-3 mt-6" >

                        <input
                            type="text"
                            placeholder="Item title"
                            className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                            onChange={(e) => setTitle(e.target.value)}
                        />


                        <textarea
                            placeholder="Description"
                            rows="4"
                            className="w-full px-4 py-1 rounded-lg bg-[#2A2928] outline-none resize-none"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>

                        <select className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                            value={category} onChange={(e) => setCategory(e.target.value)}>

                            <option>Electronics</option>
                            <option>Bags</option>
                            <option>Books</option>
                        </select>

                        <select className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                            value={category} onChange={(e) => setStatus(e.target.value)}>
                            <option>Status</option>
                            <option>Lost</option>
                            <option>Found</option>
                        </select>

                        <select className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                            value={category} onChange={(e) => setLocation(e.target.value)}>
                            <option>Location</option>
                            <option>IIPS</option>
                            <option>SCSIT</option>
                            <option>ICH</option>
                            <option>Canteen</option>
                            <option>Temple</option>
                            <option>Football Ground</option>
                        </select>



                        <input
                            type="text"
                            placeholder="Image URL"
                            className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                            onChange={(e) => setLocation(e.target.value)}
                        />

                        <div className="flex justify-end gap-3 mt-4">

                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-600 rounded-lg"
                                onClick={closeModal} >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#E07848] rounded-lg"
                            >
                                Submit
                            </button>

                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}



export default ReportModal;