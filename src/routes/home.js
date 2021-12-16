import EditorTabBar from "../components/EditorTabBar"
import homeIcon from '@iconify-icons/codicon/home';

export default function Home() {
    return(
        <div>
            <EditorTabBar title="home.ts" icon={homeIcon}></EditorTabBar>
            Home
        </div>
    )
}