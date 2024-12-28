import React from 'react'
import SingleColumn from './SingleColumn'

function Columns({columns}) {
    return (
        <thead>
            <tr>
                {columns.map((item, index) => (
                   SingleColumn({name: item}) 
                ))}
                {/* <th className="p-4 border-b border-slate-200 bg-slate-50">
                    <p className="text-sm font-normal leading-none text-slate-500">
                        Student ID
                    </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                    <p className="text-sm font-normal leading-none text-slate-500">
                        Student Name
                    </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                    <p className="text-sm font-normal leading-none text-slate-500">
                        Grade
                    </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                    <p className="text-sm font-normal leading-none text-slate-500">
                        Subject
                    </p>
                </th> */}
            </tr>
        </thead>
    )
}

export default Columns