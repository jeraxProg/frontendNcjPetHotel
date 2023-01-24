import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
// import Reservenowpage from './pages/reservenow';
import Petboarding from './pages/petboarding';
import Admin from './pages/Admin';
import UserForm from './pages/userForm';
import Services from './pages/services';
import ContactUs from './pages/contact';
// import Login from './pages/login';
// import Signup from './pages/Signup';
// import SearchReservation from './pages/searchReservation';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/reservenow' element={<Reservenowpage/>}/> */}
        <Route path='/services' element={<Services/>}/>
        <Route path='/petboarding' element={<Petboarding/>}/>
        <Route path='/reserve' element={<UserForm/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        {/* <Route path='/signup' element={<Signup/>}/> */}
        
        {/* <Route path='/login' element={<Login/>}/>
         
          <Route path='/search' element={<SearchReservation/>}/> */}
      </Routes>
      
    </Router>
  );
}

export default App;
