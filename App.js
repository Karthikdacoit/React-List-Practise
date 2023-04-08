import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import { Component } from 'react';

function App() {
  return (
    <div>
      <h1>Latest News</h1>
      <NewsList/>
    
    </div>
  );
}

export default App;
