import React from 'react'

const HistoricoSimulacoes = ({
    historicoSimulacoes
}) => {


    return (
        <div className='p-3 mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>Histórico de simulações</h3>
                <p className='m-0'>4 simulações</p>
            </div>
            <div>
                <ul className='list-unstyled p-0 rounded-3 border'>
                    <li className='d-flex justify-content-between align-items-center bg-light p-3  border-bottom'>
                        <span>Data</span>
                        <strong>Valor Final</strong>
                    </li>
                    {historicoSimulacoes.map((item, index) => (
                        <li
                            key={index}
                            className='d-flex justify-content-between align-items-center p-3 border-bottom'
                        >
                            <span>{item.data}</span>
                            <strong>{item.valorFinal}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HistoricoSimulacoes