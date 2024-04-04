
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import AmieComp from './components/AmieComp';
import FirstContentComp from './components/FirstContentComp';
import Info from './components/Info';
import FeedbackForm from './components/FeedbackForm';
import Thanks from './components/Thanks';


function App() {
  return (
    <Router>
    <div className="main">
      
      <AmieComp/>
      <Routes>
        <Route path='/' element={<FirstContentComp/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/form' element={<FeedbackForm/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
       
      </Routes>
      
    
    </div>
    </Router>
  );
}

export default App;
