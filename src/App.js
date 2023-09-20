import logo from './logo.svg';
import './App.css';
import Block from './component/block/Block';
import Weather from './component/weather/Weather';
import Time from './component/time/Time';
import Currency from './component/currency/Currency';


function App() {
  return (
    <div className="App">
      <div className='content'>
        <Block child={<Weather />}/>
        <Block child={<Time />}/>
        <Block child={<Currency />}/>

      </div>
    </div>
  );
}

export default App;
