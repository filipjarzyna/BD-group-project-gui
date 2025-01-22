import Columns from './Columns/Columns';
import Searchbar from './Searchbar'
import Rows from './Rows/Rows';
import TableNav from './Pagination Nav/TableNav';

const columns = ['ID Student', 'Mark', 'Weight', 'ID Teacher', 'ID Subject', 'Date', 'Edit'];

function Table({ data, totalPages, curPage }) {
    
    
    if (data === undefined || totalPages === 0) {
        return <div className='h-[70svh] flex items-center justify-center'>
        <p className='text-center'>Brak wyników</p>
        </div>
    }


    return (
        <div>
            {/* <Searchbar /> */}
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