import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';
import ExibeDados from './ExibeDados'; 

function App() {
  const [valorInicial, setValorInicial] = useState('');
  const [aporteMensal, setAporteMensal] = useState('');
  const [taxaDeJuros, setTaxaDeJuros] = useState('');
  const [periodo, setPeriodo] = useState('');

  const resetaValores = function() {
    setValorInicial('');
    setAporteMensal('');
    setTaxaDeJuros('');
    setPeriodo('');
  }


  return (
    <div className='container' style={{maxWidth:900}}>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12'>
          Hello, Investimentos
          <CapturaDados
            valorInicial={valorInicial}
            setValorInicial={setValorInicial}
            aporteMensal={aporteMensal}
            setAporteMensal={setAporteMensal}
            taxaDeJuros={taxaDeJuros}
            setTaxaDeJuros={setTaxaDeJuros}
            periodo={periodo}
            setPeriodo={setPeriodo}
            resetaValores={resetaValores}
          />
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
