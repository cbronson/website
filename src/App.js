import logo from './logo.svg';
import './App.css';
import ActivityBar from './components/ActivityBar';
import SidebarLeft from './components/SidebarLeft';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div class="main">
      <ActivityBar className="activityBar"></ActivityBar>
      <SidebarLeft className="sidebarLeft"></SidebarLeft>
      <Editor className="editor"></Editor>
      <StatusBar></StatusBar>
    </div>
  );
}

export default App;
