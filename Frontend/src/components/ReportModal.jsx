

function ReportModal({ closeModal }) {

    return (
        <div className="fixed inset-0 bg-black/60">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-[#1A1918] w-[500px] rounded-xl  pt-15 px-6 text-white ">
                    <h2 className="text-2xl font-bold ">
                        Report Item
                    </h2>
                    <form className="flex flex-col gap-3 mt-6">

                        <input
                            type="text"
                            placeholder="Item title"
                            className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                        />

                        <textarea
                            placeholder="Description"
                            rows="4"
                            className="w-full px-4 py-1 rounded-lg bg-[#2A2928] outline-none resize-none"
                        ></textarea>

                        <select className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none">
                            <option>Category</option>
                            <option>Electronics</option>
                            <option>Bags</option>
                            <option>Books</option>
                        </select>

                        <select className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none">
                            <option>Status</option>
                            <option>Lost</option>
                            <option>Found</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Image URL"
                            className="w-full px-4 py-3 rounded-lg bg-[#2A2928] outline-none"
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