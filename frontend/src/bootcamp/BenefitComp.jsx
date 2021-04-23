import React from 'react'

export default function BenefitComp(props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{props.title}</p>
                <p className="text-sm">{props.desc}</p>
            </div>
        </>
    )
}
