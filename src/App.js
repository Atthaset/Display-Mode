import './App.css';
import Title from './Components/Title';
import Content from './Components/Content';
import { createContext, useState } from 'react';

export const DisplayContext = createContext()

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <DisplayContext.Provider value={{theme, setTheme}}>
      <div className='app'>
        <Title />
        <Content />
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
