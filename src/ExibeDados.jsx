import React, { useState, useEffect } from 'react'

const ExibeDados = ({
    valorFinal,
    totalInvestido,
    jurosAcumulados,
    numeroDeAportes,
    rentabilidade }) => {
    return (
        <div className='p-4 m-2 bg-light rounded-3'>
            <div className="row border-bottom mb-4">
                <div className='col-12 pb-3'>
                    <p className='mb-1'>Valor Final acumulado</p>
                    <h1 className='text-success'>R$ {valorFinal || 0}</h1>
                </div>
            </div>
            <div className="row g-2">
                <div className='col-md-6'>
                    <p className='mb-0'>Total Investido</p>
                    <h2 value={totalInvestido}>R$ {totalInvestido || 0}</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Juros acumulados</p>
                    <h2 value={jurosAcumulados}>R$ {jurosAcumulados || 0}</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Numero de aportes</p>
                    <h2>{numeroDeAportes || 0}</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Rentabilidade</p>
                    <h2 className='text-success'>{rentabilidade || 0}%</h2>
                </div>
            </div>
        </div>
    )
}

export default ExibeDados