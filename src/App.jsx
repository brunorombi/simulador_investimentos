import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CapturaDados from './CapturaDados';
import ExibeDados from './ExibeDados';
import HistoricoSimulacoes from './HistoricoSimulacoes'; 

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
    const vi = Number(valorInicial);
    const pmt = Number(aporteMensal);
    const i = Number(taxaDeJuros) / 100;
    const n = Number(periodo);

    let montante = 0;

    if (i === 0) {
      montante = vi + pmt * n;
    } else {
      montante =
        vi * Math.pow(1 + i, n) +
        pmt * ((Math.pow(1 + i, n) - 1) / i);
    }

    const total = vi + pmt * n;
    const juros = montante - total;
    const rent = total > 0 ? (juros / total) * 100 : 0;

    setValorFinal(montante.toFixed(2));
    setTotalInvestido(total.toFixed(2));
    setJurosAcumulados(juros.toFixed(2));
    setNumeroDeAportes(n);
    setRentabilidade(rent.toFixed(2));
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
          <HistoricoSimulacoes
          
          />
        </div>
      </div>
    </div>  
  )
}

export default App
