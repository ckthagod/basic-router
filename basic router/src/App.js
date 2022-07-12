import "./App.css";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Error from "./Pages/Error";

const App = () => {
  const name = "Tshisi";
  return (
    <Router >

      <nav>
        <Link to="/">Hello</Link>
        <Link to="/about">about</Link>
        <Link to="/profile">profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/profile/:user" element={<Profile name={name}/>} />
        <Route  path="*" element={<Error />} />
      </Routes>
     <div>Footer</div>
    </Router>
  )
}

export default App