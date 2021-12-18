import EditorTab from '../EditorTab'
import './styles.css'
import homeIcon from '@iconify-icons/codicon/home';

export default function EditorTabBarMobile() {
    return (
        <div class="editorTabBar">
            <EditorTab title='home.ts' linkTo='/' icon={homeIcon}></EditorTab>
            <EditorTab title='links.ts' linkTo='/links' icon={homeIcon}></EditorTab>
            <EditorTab title='skills.ts' linkTo='/skills' icon={homeIcon}></EditorTab>
            <EditorTab title='resume.ts' linkTo='/resume' icon={homeIcon}></EditorTab>
        </div>
    )
}