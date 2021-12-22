import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar"
import EditorContent from "../components/EditorContent";
import javascriptIcon from '@iconify/icons-simple-icons/javascript';

export default function Resume() {
    return(
        <div>
            <ConditionalEditorTabBar title="resume.ts" icon={javascriptIcon}></ConditionalEditorTabBar>
            <EditorContent content='resume'></EditorContent>
        </div>
    )
}