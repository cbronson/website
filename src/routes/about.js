import EditorTabBar from "../components/EditorTabBar"
import typescriptIcon from '@iconify/icons-simple-icons/typescript';

export default function About() {
    return(
        <div>
           <EditorTabBar title="about.ts" icon={typescriptIcon}></EditorTabBar>
            Hello world!!
        </div>
    )
}