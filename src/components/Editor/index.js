
import './styles.css'
import { Outlet } from "react-router-dom";

function Editor() {
    return (
        <div class="editor">
           <Outlet />
        </div>
    )
}

export default Editor