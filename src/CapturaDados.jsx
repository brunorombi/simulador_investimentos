import React, { useState, useEffect } from 'react'

const CapturaDados = ({
    valorInicial,
    setValorInicial,
    aporteMensal,
    setAporteMensal,
    taxaDeJuros,
    setTaxaDeJuros,
    periodo,
    setPeriodo,
    resetaValores,
    calculaValores }) => {

    useEffect(() => {
        console.log(`valor inicial ${valorInicial || 0}, aporte mensal ${aporteMensal || 0}, taxa de juros ${taxaDeJuros || 0}, periodo ${periodo || 0}`);
    }, [valorInicial, aporteMensal, taxaDeJuros, periodo]);

    return (
        <div className='p-3 mt-4'>
            <form>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <label className='mb-2'>Valor Inicial (R$)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={valorInicial}
                            required
                            min="0"
                            onChange={(e) => setValorInicial(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='mb-2'>Aporte Mensal (R$)</label>
                        <input
                            type="number"
                            className="form-control"
                            required
                            min="0"
                            value={aporteMensal}
                            onChange={(e) => setAporteMensal(e.target.value)}
                        />
                    </div>

                    <div className='col-md-6'>
                        <label className='mb-2'>Taxa de juros (% ao mês)</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            className="form-control"
                            value={taxaDeJuros}
                            onChange={(e) => setTaxaDeJuros(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='mb-2'>Período (meses)</label>
                        <input
                            type="number"
                            min="1"
                            className="form-control"
                            value={periodo}
                            onChange={(e) => setPeriodo(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-9">
                        <button
                            className="btn btn-primary w-100"
                            onClick={function (e) {
                                calculaValores();
                                e.preventDefault();
                            }}
                        >
                            Calcular
                        </button>
                    </div>

                    <div className="col-3">
                        <button
                            className="btn btn-secondary w-100"
                            onClick={function (e) {
                                e.preventDefault();
                                resetaValores();
                            }}
                        >
                            Limpar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CapturaDados