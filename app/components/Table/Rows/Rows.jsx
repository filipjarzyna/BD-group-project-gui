import React from 'react'
import SingleRow from './SingleRow/SingleRow'

function Rows({ data }) {
    return (
        <tbody key={'rows'}>
            {data.map((item) => (
                <SingleRow
                    item={item}
                />
            ))}
        </tbody>
    )
}

export default Rows