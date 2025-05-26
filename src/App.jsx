import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Body from './components/Body';
import Hero from './components/Hero';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState(null);

  // const handleLogin = (userData) => {
  //   setUser(userData);
  // };

  // const handleLogout = () => {
  //   setUser(null);
  // };
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  });


  return (
    <Router>
     <Header2 user={user} />
      {/* <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={!user ? <Body onLogin={handleLogin} /> : <Navigate to="/hero" />}
        />

        <Route
          path="/hero"
          element={user ? <Hero user={user} onLogout={handleLogout} /> : <Navigate to="/" />}
        />

       
      </Routes> */}
      <Hero/>
      <Footer />
    </Router>
  );
}

export default App;
