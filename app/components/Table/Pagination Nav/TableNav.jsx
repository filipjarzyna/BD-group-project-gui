'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

function TableNav({ curPage = 1, totalPages = 1 }) {
    const searchParams = useSearchParams();
    const [pageInput, setPageInput] = useState(curPage);
    const router = useRouter();

    const handlePage = (e, { newVal }) => {
        // e.preventDefault();
        //push search input to the url
        const params = new URLSearchParams(searchParams.toString())
        if (isNaN(curPage) || newVal < 1 || newVal > totalPages) {
            params.set('page', 1);
        } else {
            params.set('page', newVal);
        }

        router.push(`?${params.toString()}`, undefined, { shallow: false });
    }


    return (
        <div className="flex justify-between items-center px-4 py-3">
            <div className="text-sm text-slate-500">
                Showing page <b>{curPage}</b> of {totalPages}
            </div>
            <div className="flex space-x-1">
                <button className={`${curPage > 1 || "hidden"} select-none px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}

                    onClick={(e) => handlePage(e, { newVal: curPage - 1 })}
                >
                    Prev
                </button>


                <button className="px-3 py-1 min-w-9 min-h-9 text-sm select-none font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                    onClick={(e) => handlePage(e, { newVal: curPage + 1 })}
                >
                    Next
                </button>
                <div className='flex items-center text-sm font-normal text-slate-500 px-5'>
                    <button className="px-3 py-1 min-w-9 min-h-9 text-sm select-none font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                        onClick={(e) => handlePage(e, { newVal: pageInput })}
                    >
                        Go to page
                    </button>
                    <input type="number" min={1} max={totalPages} value={pageInput}
                        className='min-h-9 py-1 border rounded text-center'
                        onChange={(e) => setPageInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default TableNav