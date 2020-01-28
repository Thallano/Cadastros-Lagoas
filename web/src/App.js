import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import SeloForm from './components/SeloForm/';
import SeloItem from './components/SeloItem/';

function App(){
  const [selos, setSelos] = useState([]);
  
  useEffect(() => { 
      async function loadSelos(){
          const response = await api.get('/selos');

          setSelos(response.data);
      }
      loadSelos();
  },[]);

async function handleAddSelo(data){
    const response = await api.post('/selos', data)

    setSelos([...selos, response.data]);
  
}

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <SeloForm onSubmit ={handleAddSelo} />
      </aside>


      <main>
        <ul>
          {selos.map(selo => (
                                  
              <SeloItem key={selo._id} selo={selo} />
              
          ))}
        </ul>
      </main>
    </div>
   );

}

export default App;