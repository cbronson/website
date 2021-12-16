import './styles.css'
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";

export default function SideBarNavLink({ level, title, icon, linkTo }) {
    return (
        <NavLink to={linkTo} className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"}>
            <div class={"sideBarLeftHeader level-"+level}>
                <Icon className="sideBarLeftHeader-icon" icon={icon} />
                <div class={"sideBarLeftHeader-title level-"+level}>{title}</div>
            </div>
        </NavLink>
    )
}