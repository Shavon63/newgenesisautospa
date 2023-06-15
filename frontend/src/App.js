import Services from './pages/Services/Services';
import Packages from './pages/Packages/Packages';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Error from './pages/Error/Error';

function App() {
 


  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/services' element={<Services/>}/>
      <Route path= '/packages' element={<Packages/>}/>
      <Route path='/*'element={<Error/>}/> 
      </Routes>
    </div>
  );
}

export default App;
