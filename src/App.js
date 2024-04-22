import Navbar from './components/Navbar';
import About from './components/About'
import Skills from './components/Skills'
import Work from  './components/Work'

function App() {
  return (
    <div className='overscroll-x-none' >
     <Navbar/>
     <About />
     <Skills />
     <Work />
    </div>
  );
}

export default App;
