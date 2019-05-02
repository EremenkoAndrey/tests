import React from 'react';

export default function DumpItem({ item, index, changeItem }) {
    console.log(`DumpItem render ${index}`)

    return (
        <li style={{ padding: '10px' }} key={item}>
            {item}
            <br />
            <button onClick={() => changeItem(index)}>{'Increment'}</button>
        </li>
    )
}
