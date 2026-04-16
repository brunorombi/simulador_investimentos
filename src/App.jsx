import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';
import ExibeDados from './ExibeDados'; 

function App() {

  return (
    <div className='container' style={{maxWidth:900}}>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12'>
          Hello, Investimentos
          <CapturaDados/>
        </div>
        <div className='col-12'>
          <ExibeDados/>
        </div>
        <div className='col-12'>

        </div>
      </div>
    </div>  
  )
}

export default App
