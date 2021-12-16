import "./styles.css";
import { Icon } from '@iconify/react';
import filesIcon from '@iconify-icons/codicon/files';
import closeIcon from '@iconify-icons/codicon/close';

function EditorTab() {
  return (
  <div class="editorTab">
    <Icon icon={filesIcon} />
    <a class="editorTab-title">Tab</a>
    <Icon className="editorTab-close" icon={closeIcon} />
  </div>
  );
}

export default EditorTab;
