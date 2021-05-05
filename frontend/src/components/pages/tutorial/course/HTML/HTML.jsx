import React, { useEffect, useState } from 'react'
import EditorHTML from '../../../../major/editor/EditorHTML'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'

function HTML() {
    const [html, sethtml] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>
                        ${html}
                    </body>
                </html>
            `)
        }, 200)
        return () => clearTimeout(timeout)
    }, [html])
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="w-full flex items-start">
                <div className="w-1/2">
                    <EditorHTML language="xml" value={html} onChange={sethtml}/>
                </div>
                <div className=" bg-red-200">
                    <iframe title="output" 
                    srcDoc={srcDoc}
                    sandbox="allow-script" frameBorder="0" />
                </div>
            </div>
        </>
    )
}

export default HTML
