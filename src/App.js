import './App.css';
import ActivityBar from 'components/ActivityBar';
import SideBarLeft from 'components/SideBarLeft';
import Editor from 'components/Editor';
import StatusBar from 'components/StatusBar';

function App() {
  return (
    <div class="body">
      <div class="main-container">
        <ActivityBar className="activityBar"></ActivityBar>
        <SideBarLeft className="sidebarLeft"></SideBarLeft>
        <Editor className="editor"></Editor>
      </div>
      <div class="bottom-container">
        <StatusBar></StatusBar>
      </div>
    </div>
  );
}

export default App;
