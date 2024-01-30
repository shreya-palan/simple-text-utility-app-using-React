//import { useState } from 'react';
import './App.css';
//import About from './components/About';
//import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
 // const [darkMode,setDarkMode] = useState(false); //whether dark mode is enabled or not
  return (
    <>
        {/*<Navbar title="Text Analyser" mode={darkMode}/>*/}
        <div className="container my-3">
          <TextForm heading="Enter the text here"/>
          {/*<About/>*/}
        </div>
    </>
  );
}

export default App;
