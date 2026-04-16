import React from 'react'

const ExibeDados = () => {
    return (
        <div className='p-4 m-2 bg-light rounded-3'>
            <div className="row border-bottom mb-4">
                <div className='col-12 pb-3'>
                    <p className='mb-1'>Valor Final acumulado</p>
                    <h1 className='text-success'>R$9.147,00</h1>
                </div>
            </div>
            <div className="row g-2">
                <div className='col-md-6'>
                    <p className='mb-0'>Total Investido</p>
                    <h2>R$8.200,00</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Juros acumulados</p>
                    <h2>R$947,32</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Numero de aportes</p>
                    <h2>24</h2>
                </div>
                <div className='col-md-6'>
                    <p className='mb-0'>Rentabilidade</p>
                    <h2 className='text-success'>+11,55%</h2>
                </div>
            </div>
        </div>
    )
}

export default ExibeDados