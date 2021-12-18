import './styles.css'

export default function EditorContent({ content }) {
    return (
        <pre class="editorContent">
            {content.map((c, i) => 
                <span class="editor-line" key={i}>
                    <span class={ 
                        (i === content.length - 1 ? "cursor-end" : null) + " " +(c.class ? c.class : null)
                        } dangerouslySetInnerHTML={({__html: c.c})}>
                    </span>
                </span>
            )}
        </pre>
    )
}