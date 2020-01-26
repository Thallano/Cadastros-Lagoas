import React from 'react';

import './styles.css';


function SeloItem({selo}){
   
    return (
        <li className="selo-item">
            <header>
                <img src={selo.avatar_url} alt={selo.imovel} />
                <div className="user-info">
                    <strong>{selo.imovel}</strong>
                    <span>{selo.edital.join(', ')}</span>
                </div>
            </header>
            
            <a href={`https://github.com/${selo.imovel}`}>Acessar Perfil no Github</a>
            </li>
    );
}

export default SeloItem;
