import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Profile } from './components/profile/Profile';
import Scroll from "./components/scroll/Scroll"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/scroll" element={<Scroll></Scroll>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
