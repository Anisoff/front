import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Signup from './signup';
import Emailver from './email-ver';
import Vercode from './ver-code';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const [quote, setQuote] = useState('');

  const getQuote =  () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        console.log(res.data.title);
        setQuote(res.data.title);

      })
      .catch(err => {
        console.error('Error fetching the quote:', err);
      });

  }
  return (
    <Router>
      <Routes>
      <Route path="/" element={
      <>
      <Navbar />
      </>
  } />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/email-ver" element={<Emailver />} />
  <Route path="/ver-code" element={<Vercode />} />
</Routes>
</Router>
  );
};

export default App;