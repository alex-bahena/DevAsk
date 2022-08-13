import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import Login from './components/Login'
// import Signup from './components/Singup';
import AppHeader from './components/AppHeader'


function App() {
  return (
    <>
      <AppHeader />
      <Login />
      {/* <Signup /> */}
      <Footer />
    </>
  );
}

export default App;