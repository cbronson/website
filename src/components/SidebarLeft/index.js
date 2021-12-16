import SidebarLeftHeader from '../SideBarLeftHeader'
import SideBarLeftTitle from '../SideBarLeftTitle'
import './styles.css'
import chevronDownIcon from '@iconify-icons/codicon/chevron-down';
import homeIcon from '@iconify-icons/codicon/home';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import SideBarNavLink from '../SideBarNavLink';

function SideBarLeft() {
    return (
        <div class="sideBarLeft">
            <SideBarLeftTitle></SideBarLeftTitle>
            <SidebarLeftHeader title="Default (Workspace)" linkTo="/" level="0" icon={chevronDownIcon}></SidebarLeftHeader>
            <SideBarNavLink title="home.ts" linkTo="/" level="1" icon={homeIcon}></SideBarNavLink>
            <SideBarNavLink title="about.ts" linkTo="/about" level="1" icon={typescriptIcon}></SideBarNavLink>
        </div>
    )
}

export default SideBarLeft