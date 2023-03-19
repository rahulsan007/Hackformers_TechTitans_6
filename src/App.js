
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Nav';
import Card from './components/Card';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import FoodCard from './components/FoodCard';
import FoodCardMenu from './components/FoodCardMenu';
import Form from './components/DonatePage';
import DonatePage from './components/DonatePage';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import HotelDashboard from './components/Hotel/HotelDashboard';
import CharityDashboard from './components/Charity/CharityDashboard';
import Profile from './components/Profile';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Test from './components/Hotel/Test';


function App() {
  return (
    <Router>
      
       <NavBar/>
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/donate" element={<DonatePage/>}/>
        <Route path="/hoteldashboard" element={<HotelDashboard/>}/>
        <Route path="/charitydashboard" element={<CharityDashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/test" element={<Test/>}/>
        
        
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
     

    
  
    
  );
}

export default App;
