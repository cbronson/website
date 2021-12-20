import SidebarLeftHeader from 'components/SideBarLeftHeader'
import SideBarLeftTitle from 'components/SideBarLeftTitle'
import './styles.css'
import chevronDownIcon from '@iconify-icons/codicon/chevron-down';
import homeIcon from '@iconify-icons/codicon/home';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import htmlIcon from '@iconify/icons-simple-icons/html5';
import SideBarNavLink from 'components/SideBarNavLink';
import { useMediaQuery } from 'react-responsive'

function SideBarLeft() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })
    return isTabletOrMobile 
        ? null
        : (
            <div class="sideBarLeft">
                <SideBarLeftTitle></SideBarLeftTitle>
                <SidebarLeftHeader title="Default (Workspace)" linkTo="/" level="0" icon={chevronDownIcon}></SidebarLeftHeader>
                <SideBarNavLink title="home.ts" linkTo="/" level="1" icon={homeIcon}></SideBarNavLink>
                <SideBarNavLink title="links.ts" linkTo="/links" level="1" icon={htmlIcon}></SideBarNavLink>
                <SideBarNavLink title="skills.ts" linkTo="/skills" level="1" icon={typescriptIcon}></SideBarNavLink>
                <SideBarNavLink title="resume.ts" linkTo="/resume" level="1" icon={javascriptIcon}></SideBarNavLink>
            </div>
        )
}

export default SideBarLeft