import './styles.css'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

function SideBarLeftHeader({ level, title, icon, linkTo }) {
    return (
        <Link to={linkTo}>
            <div class={"sideBarLeftHeader level-"+level}>
                <Icon className="sideBarLeftHeader-icon" icon={icon} />
                <div class={"sideBarLeftHeader-title level-"+level}>{title}</div>
            </div>
        </Link>
    )
}

export default SideBarLeftHeader