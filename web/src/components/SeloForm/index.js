import React, { useState } from 'react';

function SeloForm({ onSubmit }){
    const [imovel, setImovel] = useState('');
    const [name, setName] = useState('');
    const [edital, setEdital] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

   /* useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            
            setLatitude(latitude);
            setLongitude(longitude);
            },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
    },[]);*/
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            imovel,
            name,
            edital,
            latitude,
            longitude,
        });
        setName('');
        setImovel('');
        setEdital('');
        setLatitude('');
        setLongitude('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="imovel">Selo</label>
            <input 
            name="imovel" 
            id="imovel" 
            required 
            value={imovel}
            onChange={e => setImovel(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input 
            name="name" 
            id="name" 
            required 
            value={name}
            onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="edital">Edital</label>
            <input 
            name="edital" 
            id="edital" 
            required 
            value={edital}
            onChange={e => setEdital(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type= "number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type= "number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
              />
            </div>

          </div>
          <button type="submit">Salvar</button>
         
        </form>
        
    );
}

export default SeloForm;