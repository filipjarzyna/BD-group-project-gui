import { rowStructure } from '@/app/lib/dataStructures';
import Columns from './Columns/Columns';
import Searchbar from './Searchbar'
import Rows from './Rows/Rows';

const columns = ['ID Student', 'Mark', 'Weight', 'ID Teacher', 'ID Subject', 'Date', 'Edit'];

// const rows = [
//     rowStructure(1, 'jurek', 'ogorek', 4, 'Joanna Marchut', 'matematyka'),
//     rowStructure(2, 'robert', 'kulski', 3, 'Joanna Marchut', 'matematyka'),
//     rowStructure(1, 'jurek', 'ogorek', 2, 'Adam Stal', 'polski'),
//     rowStructure(2, 'robert', 'kulski', 1, 'Katarzyna Nowak', 'angielski'),
// ]


function Table({ data }) {
    console.log(data)
    return (
        <div>
            <Searchbar />
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left">
                    <Columns
                        columns={columns}
                    />
                    <Rows
                        data={data}
                    />
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-sm text-slate-500">
                        Showing <b>1-5</b> of 45
                    </div>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Prev
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                            1
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            2
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            3
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Table