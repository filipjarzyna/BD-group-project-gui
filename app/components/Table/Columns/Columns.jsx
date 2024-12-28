import SingleColumn from './SingleColumn'

function Columns({ columns }) {
    return (
        <>
            <colgroup>
                <col className='w-[10%]'/>
                <col className='w-[10%]'/>
                <col className='w-[10%]'/>
                <col className='w-[10%]'/>
                <col className='w-[10%]'/>
                <col className='w-[15%]'/>
                <col className='w-[15%]'/>
            </colgroup>
            <thead>
                <tr key={'columns'}>
                    {columns.map((item, index) => (
                        SingleColumn({ name: item, id: index })
                    ))}
                </tr>
            </thead>
        </>
    )
}

export default Columns