import React from 'react'


const CapturaDados = () => {
    return (
        <div className='p-3 mt-4'>
            <form>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <label className='mb-2'>Valor Inicial</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className='col-md-6'>
                        <label className='mb-2'>Aporte Mensal</label>
                        <input type="number" className="form-control" />
                    </div>

                    <div className='col-md-6'>
                        <label className='mb-2'>Taxa de juros</label>
                        <input type="number" step="0.01" className="form-control" />
                    </div>
                    <div className='col-md-6'>
                        <label className='mb-2'>Período</label>
                        <input type="number" min="1" className="form-control" />
                    </div>
                </div>

                <div className="row mt-3 g-3">
                    <div className="col-9">
                        <button
                            className="btn btn-primary w-100"
                            onClick={(e) => e.preventDefault()}
                        >
                            Calcular
                        </button>
                    </div>

                    <div className="col-3">
                        <button 
                            className="btn btn-secondary w-100"
                            onClick={(e) => e.preventDefault()}
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