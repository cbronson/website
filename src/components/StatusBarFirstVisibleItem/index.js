import './styles.css'
import { Icon } from '@iconify/react';
import remoteIcon from '@iconify-icons/codicon/remote';

function StatusBarFirstVisibleItem() {
    return (
        <div class="firstVisibleItem">
            <Icon icon={remoteIcon} />
        </div>
    )
}

export default StatusBarFirstVisibleItem