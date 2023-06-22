import React from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom' 
import { SideBar } from './components/SideBar/SideBar';
import { Dashboard } from './screens/Dashboard/Dashboard';
import Practices from './screens/Practices/Practices';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/providers' element={<div>providers</div>} />
          <Route path='/practices' element={<Practices />} />
          <Route path='/jobs' element={<div>jobs</div>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
