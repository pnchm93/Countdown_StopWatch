import './App.css'
import CountdownTimer from './CountdoenTimer';
function App() {
  return (
    <div className='App'>
      <h2>Routine starting in.....</h2>
      <h4>Subheading here</h4>
      <CountdownTimer initialTime={60}  className='setposition'/>
    </div>
  );
}

export default App;

