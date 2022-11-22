import './App.css';
import ControlledData from './Components/ControlledData';

function App() {
  return (
    <div className="App bg-orange-400 flex flex-col items-center min-h-screen">
      <h1 className='text-white text-5xl mb-8 mt-3'>Adetomiwa's Todo List</h1>
      <ControlledData />
    </div>
  );
}

export default App;