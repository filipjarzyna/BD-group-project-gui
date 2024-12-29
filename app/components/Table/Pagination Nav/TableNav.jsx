
'use client'
function TableNav({curPage = 1, totalPages= 1}) {
    
    const handlePage = (next) => {
        if (next) {
            // curPage+1
        } else {
            // curPage-1
        }
    }

    return (
        <div className="flex justify-between items-center px-4 py-3">
            <div className="text-sm text-slate-500">
                Showing page <b>{curPage}</b> of {totalPages}
            </div>
            <div className="flex space-x-1">
                <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                >
                    Prev
                </button>
                <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                    Next
                </button>
            </div>
        </div>
    )
}

export default TableNav