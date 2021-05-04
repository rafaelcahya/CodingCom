import React from 'react'

export default function StageComp(props) {
    return (
        <>
            <div>
                <p className="text-lg font-semibold mb-2">{props.title}</p>
                <p style={{width: "475px"}}>{props.desc}</p>
            </div>
        </>
    )
}
