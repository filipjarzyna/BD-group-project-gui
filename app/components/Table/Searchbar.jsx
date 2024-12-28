'use client'
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/router";
function Searchbar({defaultSearch}) {
    const [search, setSearch] = useState(defaultSearch || '');
    

    return (
        <div className="w-full flex justify-between items-center mb-3 mt-1">
            <div>
                <div className="w-full max-w-sm min-w-[200px] relative">
                    <div className="relative">
                        <input
                            className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                            placeholder="Search by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                            type="button"
                        >
                            <IoIosSearch className='text-black w-12'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar