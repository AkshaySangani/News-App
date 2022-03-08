import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {

  const [progress, setProgress] = useState(0);

return (
  <div>
    <><LoadingBar color='#f11946' progress={progress} /><Navbar /></>
    {/* <News setProgress={state.setProgress}   pageSize={6}country="in" category="general" /> */}
    <Routes>
      <Route path="/" element={<News setProgress={setProgress} pageSize={6} country="in"  />} />
      <Route path="/:category" element={<News setProgress={setProgress} pageSize={6} country="in" />} />
      {/* <Route path="/business" element={<News setProgress={setProgress} pageSize={6} country="in" category="business" />} />
      <Route path="/entertainment" element={<News setProgress={setProgress} pageSize={6} country="in" category="entertainment" />} />
      <Route path="/general" element={<News setProgress={setProgress} pageSize={6} country="in" category="general" />} />
      <Route path="/health" element={<News setProgress={setProgress} pageSize={6} country="in" category="health" />} />
      <Route path="/science" element={<News setProgress={setProgress} pageSize={6} country="in" category="science" />} />
      <Route path="/sports" element={<News setProgress={setProgress} pageSize={6} country="in" category="sports" />} />
      <Route path="/technology" element={<News setProgress={setProgress} pageSize={6} country="in" category="technology" />} /> */}
    </Routes>
  </div>
 )
 }

export default App;