import { useMediaQuery } from 'react-responsive'
import EditorTabBar from "../EditorTabBar"
import EditorTabBarMobile from "../EditorTabBarMobile"

export default function ConditionalEditorTabBar({ title, icon}) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

    return isTabletOrMobile 
        ? <EditorTabBarMobile></EditorTabBarMobile>
        : <EditorTabBar title={title} icon={icon}></EditorTabBar>
}