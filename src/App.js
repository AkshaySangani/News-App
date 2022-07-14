import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

    const [progress, setProgress] = useState(0);

    return (
        <div>
            <LoadingBar color='#f11946' progress={progress}/><Navbar/>
            <Routes>
                <Route path="/" element={<News setProgress={setProgress} pageSize={6} country="in"/>}/>
                <Route path="/:category" element={<News setProgress={setProgress} pageSize={6} country="in"/>}/>
            </Routes>
        </div>
    )
}

export default App;
