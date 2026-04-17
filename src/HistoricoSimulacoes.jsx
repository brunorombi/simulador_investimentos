import React from 'react'

const HistoricoSimulacoes = () => {
    

  return (
    <div className='p-3 mt-4'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>Histórico de simulações</h3>
            <p className='m-0'>4 simulações</p>
        </div>
        <div>
            <ul className='list-unstyled p-0 rounded-3 border'>
                <li  className='d-flex justify-content-between align-items-center bg-light p-3  border-bottom'>
                    <span>Data</span>
                    <strong>Valor Final</strong>
                </li>
                <li  className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                    <span>10/04/2026 10:30</span>
                    <strong>R$ 9.142,20</strong>
                </li>
                <li  className='d-flex justify-content-between align-items-center p-3'>
                    <span>09/04/2026 22:30</span>
                    <strong>R$4.999,99</strong>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HistoricoSimulacoes