import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [namn, setNamn] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSparanamn = () => {
      setIsLoggedIn(true);
    };

    const handleLoggaut = () => {
      setNamn('');
      setIsLoggedIn(false);
    };

    return (
      <>
        <div>
          <h1>{isLoggedIn ? `${namn}` : ''}</h1>
          {!isLoggedIn && (
            <input
              type="text"
              placeholder="Skriv ditt namn"
              value={namn}
              onChange={(e) => setNamn(e.target.value)}
            />
          )}
          {!isLoggedIn ? (
            <button onClick={handleSparanamn}>Spara namn</button>
          ) : (
            <button onClick={handleLoggaut}>Logga ut</button>
          )}
        </div>
      </>
    );


}

export default App
