import React from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom' 
import { SideBar } from './components/SideBar/SideBar';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { useStyles } from './styles';

function App() {
  const {classes} = useStyles()
  return (
    <div className={classes.container}>
      <Router>
        <SideBar>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/providers' element={<div>providers</div>} />
            <Route path='/practices' element={<div>practices</div>} />
            <Route path='/jobs' element={<div>jobs</div>} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
