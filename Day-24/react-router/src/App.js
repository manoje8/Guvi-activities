import { Link } from 'react-router-dom';
import './App.css';

function App({children}) {
  return (
    <div className="App">
      <ul className='menu'>
        <li><Link to= "/">All</Link></li>
        <li><Link to= "/fullstack">FULL STACK DEVELOPMENT</Link></li>
        <li><Link to= "/data-science">DATA SCIENCE</Link></li>
        <li><Link to= "/cyber">CYBER SECURITY</Link></li>
        <li><Link to= "/career">CAREER</Link></li>
      </ul>
      <hr />
      {children}
    </div>
  );
}

export default App;
