import './styles.css'
import { Icon } from '@iconify/react';

function SideBarLeftHeader({ level, title, icon, linkTo }) {
    return (
            <div class={"sideBarLeftHeader level-"+level}>
                <Icon className="sideBarLeftHeader-icon" icon={icon} />
                <div class={"sideBarLeftHeader-title level-"+level}>{title}</div>
            </div>
    )
}

export default SideBarLeftHeader