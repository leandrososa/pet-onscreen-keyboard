import React from 'react';

type CommodoreKeyProps = {
    keyletter: string
}

export const CommodoreKey = ({keyletter}: CommodoreKeyProps) => {
    return (
        <button>
            <span>{keyletter}</span>
        </button>
    )
}

/* export default function CommodoreKey(){
    return (
        <CommodoreKey />
    )
} */