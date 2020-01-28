import React from 'react';

import './styles.css';


function SeloItem({selo}){
   
    return (
        <li key={selo._id} className="selo-item">
            <header>
                <img src={'https://semplan.teresina.pi.gov.br/wp-content/uploads/sites/39/2015/12/LOGO-LAGOAS.jpg'} alt={selo.imovel} />
                <div className="user-info">
                    <strong>{selo.imovel}</strong>
                    <span>{selo.edital}</span>
                </div>
            </header>
            <p>{selo.name}</p>
            <a href={`https://semplan.teresina.pi.gov.br/wp-content/uploads/sites/39/2020/01/${selo.imovel}.pdf`}>Acessar Dossiê</a>
            </li>
    );
}

export default SeloItem;
