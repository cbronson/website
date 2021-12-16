import "./styles.css";
import { Icon } from '@iconify/react';
import closeIcon from '@iconify-icons/codicon/close';

function EditorTab({ title, icon }) {
  return (
  <div class="editorTab">
    <Icon icon={icon} />
    <a class="editorTab-title">{title}</a>
    <Icon className="editorTab-close" icon={closeIcon} />
  </div>
  );
}

export default EditorTab;
