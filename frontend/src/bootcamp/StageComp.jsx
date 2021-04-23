import React from 'react'

export default function StageComp(props) {
    return (
        <>
            <div>
                <p className="text-lg font-semibold mb-2">{props.title}</p>
                <p className="text-sm" style={{width: "500px"}}>{props.desc}</p>
            </div>
        </>
    )
}
