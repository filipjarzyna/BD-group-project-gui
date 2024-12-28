import React from 'react'

export default function SingleColumn({name}) {
    return (
        <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500">
                {name}
            </p>
        </th>
    )
}
