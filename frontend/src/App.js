
import Packages from './pages/Packages/Packages';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Homes from './pages/Homes/Homes';
import Nav from './components/Nav/Nav';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';

function App() {
 


  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path= '/' element={<Homes/>}/>
      <Route path= '/packages' element={<Packages/>}/>
      <Route path='/*'element={<Error/>}/> 
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
