import homeIcon from '@iconify-icons/codicon/home';
import EditorContent from "../components/EditorContent";
import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar";

export default function NotFound() {

    return(
        <div>
            <ConditionalEditorTabBar title="huh.ts" icon={homeIcon}></ConditionalEditorTabBar>
            <EditorContent content='not-found'></EditorContent>
        </div>
    )
}