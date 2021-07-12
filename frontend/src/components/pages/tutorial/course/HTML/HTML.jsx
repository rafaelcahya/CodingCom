import React, { useEffect, useState } from 'react'
import EditorHTML from '../../../../major/editor/EditorHTML'

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
            <div className="text-center p-10">
                <p className="text-3xl font-semibold">Text Editor</p>
                <p>Real-time</p>
            </div>
            <div className="flex flex-col lg:flex-row p-5 lg:px-20 w-full">
                <div className="w-full lg:w-1/2">
                    <EditorHTML language="xml" value={html} onChange={sethtml}/>
                </div>
                <div className="bg-white border border-gray-300 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none w-full lg:w-1/2">
                    <iframe title="output" 
                    srcDoc={srcDoc}
                    sandbox="allow-script" frameBorder="0" />
                </div>
            </div>
            <span className="flex justify-center gap-1 text-sm py-10">created by <a href="/" target="_blank" className="underline">Coding.com</a></span>
        </>
    )
}

export default HTML
