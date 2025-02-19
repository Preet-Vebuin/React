import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/EventHandle'
import Toolbar from './components/EventHandle'
import Emotion from './css/Emotion'
import Button1 from './css/Exampleone/Exampleone'
import Button2 from './css/Exampletwo/Exampletwo'
import Button3 from './css/StyledComponent/StyledComponent'
import Counter from './components/Hooks/counter/Counter'
import FetchData from './components/Hooks/UseEffect/UseEffect'
import UseRef from './components/Hooks/UseRef/UseRef'
import FetchApi from './components/FetchingData/FetchApi'

const App: React.FC =()=> {
 
  return (
    
    <>
    return (
    <div>
     {/* <Toolbar/> */}
     {/* <Emotion/> */}
    {/* <Button1/>
    <Button2/>
    <Button3/> */}
    {/* <Counter/> */}
{/* <FetchData/> */}

{/* <UseRef/> */}
<FetchApi/>
     </div>
  );
    </>
  )
}

export default App
