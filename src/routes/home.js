import homeIcon from '@iconify-icons/codicon/home';
import EditorContent from "../components/EditorContent";
import ConditionalEditorTabBar from "../components/ConditionalEditorTabBar";

export default function Home() {

    return(
        <div>
            <ConditionalEditorTabBar title="home.ts" icon={homeIcon}></ConditionalEditorTabBar>
            <EditorContent content='home'></EditorContent>
        </div>
    )
}