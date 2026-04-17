import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';
import ExibeDados from './ExibeDados'; 

function App() {
  const [valorInicial, setValorInicial] = useState('');
  const [aporteMensal, setAporteMensal] = useState('');
  const [taxaDeJuros, setTaxaDeJuros] = useState('');
  const [periodo, setPeriodo] = useState('');

  const [valorFinal, setValorFinal] = useState('');
  const [totalInvestido, setTotalInvestido] = useState('');
  const [jurosAcumulados, setJurosAcumulados] = useState('');
  const [numeroDeAportes, setNumeroDeAportes] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');

  const resetaValores = function() {
    setValorInicial('');
    setAporteMensal('');
    setTaxaDeJuros('');
    setPeriodo('');
    setValorFinal('');
    setTotalInvestido('');
    setJurosAcumulados('');
    setNumeroDeAportes('');
    setRentabilidade('');
  }

  const calculaValores = function() {
    setValorFinal(valorInicial);
    setTotalInvestido(valorInicial * 2);
    setJurosAcumulados(valorInicial * 3);
    setNumeroDeAportes(aporteMensal);
    setRentabilidade(valorInicial * 4);
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
            calculaValores={calculaValores}
          />
        </div>
        <div className='col-12'>
          <ExibeDados
            valorFinal={valorFinal}
            totalInvestido={totalInvestido}
            jurosAcumulados={jurosAcumulados}
            numeroDeAportes={numeroDeAportes}
            rentabilidade={rentabilidade}
          />
        </div>
        <div className='col-12'>

        </div>
      </div>
    </div>  
  )
}

export default App
