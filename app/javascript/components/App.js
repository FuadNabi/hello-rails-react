import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Link to="/greeting">View Greetings</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting/>} />
      </Routes>
    </div>
  )
}

export default App;