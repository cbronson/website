import EditorTab from 'components/EditorTab'
import './styles.css'
import homeIcon from '@iconify-icons/codicon/home';
import htmlIcon from '@iconify/icons-simple-icons/html5';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';

export default function EditorTabBarMobile() {
    return (
        <div class="editorTabBar editorTabBarMobile">
            <EditorTab title='home.ts' linkTo='/' icon={homeIcon}></EditorTab>
            <EditorTab title='links.ts' linkTo='/links' icon={htmlIcon}></EditorTab>
            <EditorTab title='skills.ts' linkTo='/skills' icon={typescriptIcon}></EditorTab>
            <EditorTab title='resume.ts' linkTo='/resume' icon={javascriptIcon}></EditorTab>
        </div>
    )
}