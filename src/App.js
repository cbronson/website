import './App.css';
import ActivityBar from 'components/ActivityBar';
import Editor from 'components/Editor';
import StatusBar from 'components/StatusBar';

function App() {
  return (
    <div class="body">
      <div class="main-container">
        <ActivityBar className="activityBar"></ActivityBar>
        <Editor className="editor"></Editor>
      </div>
      <div class="bottom-container">
        <StatusBar></StatusBar>
      </div>
    </div>
  );
}

export default App;
