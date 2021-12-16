import './App.css';
import ActivityBar from './components/ActivityBar';
import SideBarLeft from './components/SideBarLeft';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div class="main">
      <ActivityBar className="activityBar"></ActivityBar>
      <SideBarLeft className="sidebarLeft"></SideBarLeft>
      <Editor className="editor"></Editor>
      <StatusBar></StatusBar>
    </div>
  );
}

export default App;
