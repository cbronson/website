import './styles.css'
import { Icon } from '@iconify/react';
import filesIcon from '@iconify-icons/codicon/files';
import searchIcon from '@iconify-icons/codicon/search';
import sourceControlIcon from '@iconify-icons/codicon/source-control';
import debugIcon from '@iconify-icons/codicon/debug-alt';


function ActivityBar() {
    return (
      <div class="activityBar">
        <ul class="activityBar-icons">
          <li><a class="activityBar-icon-link active"><Icon icon={filesIcon} /></a></li>
          <li><a class="activityBar-icon-link"><Icon icon={searchIcon} /></a></li>
          <li><a class="activityBar-icon-link"><Icon icon={sourceControlIcon} /></a></li>
          <li><a class="activityBar-icon-link"><Icon icon={debugIcon} /></a></li>
        </ul>
      </div>
    );
  }
  
  export default ActivityBar;