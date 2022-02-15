import SplitScreen from './SplitScreen';
import './App.css';

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor: 'blue'}}>Left!</h1>
}

const RightHandComponent = () => {
  return <h1 style={{backgroundColor: 'red'}}>Right!</h1>
}

function App() {
  return (
    <div className="App">
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
    </div>
  );
}

export default App;
