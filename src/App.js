import logo from './logo.svg';
import './App.css';


//components
import Navbar from './component/Navbar';
import Emp from './component/Emp';
import AddEmp from './component/AddEmp';
import EditEmp from './component/EditEmp';
import AllEmp from './component/AllEmp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//Routes for conditionaly route 
function App() {
  return (
    <BrowserRouter>
          <Navbar/> 
            <Routes>  
                  <Route path='/' element={<Emp/>} />
                  <Route path='/all' element={<AllEmp/>} />
                  <Route path='/add' element={<AddEmp/>} />
                  <Route path='/edit/:id' element={<EditEmp/>} />
            </Routes>          
    </BrowserRouter>

  );
}

export default App;
