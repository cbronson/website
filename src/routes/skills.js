import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar"
import EditorContent from "../components/EditorContent";
import typescriptIcon from '@iconify/icons-simple-icons/typescript';

export default function Skills() {
    return(
        <div>
            <ConditionalEditorTabBar title="skills.ts" icon={typescriptIcon}></ConditionalEditorTabBar>
            <EditorContent content='skills'></EditorContent>
        </div>
    )
}