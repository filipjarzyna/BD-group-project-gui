import { rowStructure } from '@/app/lib/dataStructures';
import Columns from './Columns/Columns';
import Searchbar from './Searchbar'
import Rows from './Rows/Rows';
import TableNav from './Pagination Nav/TableNav';

const columns = ['ID Student', 'Mark', 'Weight', 'ID Teacher', 'ID Subject', 'Date', 'Edit'];

// const rows = [
//     rowStructure(1, 'jurek', 'ogorek', 4, 'Joanna Marchut', 'matematyka'),
//     rowStructure(2, 'robert', 'kulski', 3, 'Joanna Marchut', 'matematyka'),
//     rowStructure(1, 'jurek', 'ogorek', 2, 'Adam Stal', 'polski'),
//     rowStructure(2, 'robert', 'kulski', 1, 'Katarzyna Nowak', 'angielski'),
// ]


function Table({ data, totalPages, curPage }) {
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

                <TableNav 
                    curPage={curPage}
                    totalPages={totalPages}
                />
            </div>


        </div>
    )
}

export default Table