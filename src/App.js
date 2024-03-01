import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Page from './Components/LandingPage/Page';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Page></Page>} ></Route>
      </Routes>
    {/* <Home></Home> */}
    </div>
  );
}

export default App;
