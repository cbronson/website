import "./styles.css";
import { Icon } from '@iconify/react';
import closeIcon from '@iconify-icons/codicon/close';
import { NavLink } from "react-router-dom";

function EditorTab({ title, icon, linkTo }) {
  return linkTo
   ? (
    <NavLink to={linkTo} className={({ isActive }) => isActive ? "editorTab editorTab-active" : "editorTab"}>
        <Icon icon={icon} />
        <span class="editorTab-title">{title}</span>
        <Icon className="editorTab-close" icon={closeIcon} />
    </NavLink>
   )
   : (
      <div class="editorTab editorTab-active">
        <Icon icon={icon} />
        <span class="editorTab-title">{title}</span>
        <Icon className="editorTab-close" icon={closeIcon} />
      </div>
    )

}

export default EditorTab;
