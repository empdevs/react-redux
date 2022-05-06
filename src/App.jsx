import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { ListContact, CreateContact } from './components/Index';

function App() {  

  return (
    <div className='my-2 p-2'>
      <div className="container">
        
        <h1>Contacts App</h1>
        
        <hr />

        <CreateContact/>
        <ListContact/>

      </div>
    </div>
  );
}

export default App;
