import logo from './logo.svg';
import './App.css';
import { Search } from './component/Search';
import { WeatherMap } from './component/WeatherMap';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>WeatherMap on React</h1>
      </header>
      <Search />
      
    </div>
  );
}

export default App;
