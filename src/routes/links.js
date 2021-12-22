import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar"
import EditorContent from "../components/EditorContent";
import htmlIcon from '@iconify/icons-simple-icons/html5';

export default function Links() {
    return(
        <div>
            <ConditionalEditorTabBar title="links.ts" icon={htmlIcon}></ConditionalEditorTabBar>
            <EditorContent content='links'></EditorContent>
        </div>
    )
}