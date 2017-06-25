import React from 'react';

export default function SimpleMessageCmp({ message }) {
    console.log('Showing ', message)
    return (
        <div>
            { message }
        </div>
    )
}
