import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';

function App() {

  return (
    <div className='container-md'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12'>
          Hello, Investimentos
          <CapturaDados/>
        </div>
        <div className='col-12'>

        </div>
        <div className='col-12'>

        </div>
      </div>
    </div>  
  )
}

export default App
