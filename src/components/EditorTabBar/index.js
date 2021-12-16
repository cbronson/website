import EditorTab from '../EditorTab'
import './styles.css'

function EditorTabBar({ title, icon }) {
    return (
        <div class="editorTabBar">
            <EditorTab title={title} icon={icon}></EditorTab>
        </div>
    )
}

export default EditorTabBar