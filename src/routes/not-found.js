import homeIcon from '@iconify-icons/codicon/home';
import EditorContent from "../components/EditorContent";
import EditorContentNotFound from "../editor-content/not-found";
import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar";

export default function NotFound() {

    return(
        <div>
            <ConditionalEditorTabBar title="huh.ts" icon={homeIcon}></ConditionalEditorTabBar>
            <EditorContent content={EditorContentNotFound()}></EditorContent>
        </div>
    )
}