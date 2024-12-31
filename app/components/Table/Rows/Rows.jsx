import React from 'react'
import SingleRow from './SingleRow/SingleRow'

function Rows({ data }) {
    return (
        <tbody key={'rows'}>
            {data.map((item, index) => {
                return (

                    <SingleRow
                        item={item}
                        key={index}
                    />
                );
            })}
        </tbody>
    )
}

export default Rows