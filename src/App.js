//import MenuAppBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Dashboard';
import Card from './Components/Cards';
import './App.css';
const App =()=> {

  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Card/>
      
      
    </div>
  );
}

export default App;
