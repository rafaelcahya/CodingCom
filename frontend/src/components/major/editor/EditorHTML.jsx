import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/xml-hint'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/search/match-highlighter'
import {Controlled as ControlledEditor} from 'react-codemirror2'

function EditorHTML(props) {
    const{
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value){
        onChange(value)
    }

    return (
        <>
            <div>
                {displayName}
                <br/>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                options={{
                    theme: 'dracula',
                    tabSize: 8,
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    spellcheck: true,
                    autocorrect: true,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    styleActiveLine: true,
                    styleActiveSelected: true,
                    highlightSelectionMatches:{
                        minChars: 2,
                        style:'matchhighlight'
                    }
                }}
            />
        </>
    )
}

export default EditorHTML
