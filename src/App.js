import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Projects from './component/projects/Projects';
import NavPanel from './component/navpanel/navPanel';
import Block from './component/block/Block';
import Weather from './component/weather/Weather';
import Time from './component/time/Time';
import Currency from './component/currency/Currency';
import Mono from './component/mono/Mono';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Block child={<NavPanel />}/>
        <Block child={<Projects />} />
        <Block child={<><Currency /><Weather /><Time /></>}/>

      </div>
      <div className='content'>
        <Mono />
      </div>
      <div className='content'>
      </div>
    </div>
  );
}

export default App;
 