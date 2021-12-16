import SidebarLeftHeader from '../SideBarLeftHeader'
import SideBarLeftTitle from '../SideBarLeftTitle'
import './styles.css'
import chevronDownIcon from '@iconify-icons/codicon/chevron-down';
import homeIcon from '@iconify-icons/codicon/home';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';

function SideBarLeft() {
    return (
        <div class="sideBarLeft">
            <SideBarLeftTitle></SideBarLeftTitle>
            <SidebarLeftHeader title="Default (Workspace)" linkTo="/" level="0" icon={chevronDownIcon}></SidebarLeftHeader>
            <SidebarLeftHeader title="home.ts" linkTo="/" level="1" icon={homeIcon}></SidebarLeftHeader>
            <SidebarLeftHeader title="about.ts" linkTo="/about" level="1" icon={typescriptIcon}></SidebarLeftHeader>
        </div>
    )
}

export default SideBarLeft