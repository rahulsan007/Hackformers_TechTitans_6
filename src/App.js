
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
import HotelLogin from './components/Hotel/HotelLogin';
import HotelSignup from './components/Hotel/HotelSignup';
import CharityDashboard from './components/Charity/CharityDashboard';
import CharityLogin from './components/Charity/CharityLogin';
import CharitySignup from './components/Charity/CharitySignup';
import Profile from './components/Profile';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Test from './components/Hotel/Test';
import PaymentForm from './components/PaymentForm';


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
        <Route path="/hotellogin" element={<HotelLogin/>}/>
        <Route path="/hotelsignup" element={<HotelSignup/>}/>
        <Route path="/charitydashboard" element={<CharityDashboard/>}/>
        <Route path="/charitylogin" element={<CharityLogin/>}/>
        <Route path="/charitysignup" element={<CharitySignup/>}/>
        {/* <Route path="/paymentform" element={<PaymentForm/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/test" element={<Test/>}/>
        
        
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
     

    
  
    
  );
}

export default App;
