import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useToDo } from "hooks";

function ListaMovto() {

    const { detalhes, getDetalhesMovtos } = useToDo();

    useEffect(() => {
        getDetalhesMovtos();
    }, [getDetalhesMovtos, ])

    return (
        <div className="container">
            <div className="row ">
                {/* ----------ENTRADAS----------------- */}
                <div className="col-sm table-striped text-center">
                    <h2 style={{ color: 'green' }} >ENTRADAS</h2>
                    <table className="table table-striped table-sm">
                        <thead>
                            {detalhes.totalEntradas.map(item => (
                                <tr key={item.idmes}>
                                    <th className="control-label col-lg-4">Total: </th>
                                    <th className="control-label col-lg-3 monetario">{'R$ '}{item}</th>
                                </tr>
                            ))};
                        </thead>
                        <tbody className="detalhes">
                            <tr>
                                <td >{'Salário Ele'} {':'}</td>
                                <td className="monetario">{'R$ '}{ }</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                {/* ----------SAIDAS----------------- */}
                <div className="col-sm table-striped text-center">
                    <h2 style={{ color: 'red' }} >SAÍDAS</h2>
                    <table className="table table-striped table-sm">
                        <thead>
                            {detalhes.totalSaidas.map(item => (
                                <tr key={item.idmes}>
                                    <th className="control-label col-lg-4 ">Total: </th>
                                    <th className="control-label col-lg-3 ">{'R$ '}{item}</th>
                                </tr>
                            ))};
                        </thead>
                        <tbody className="detalhes">
                            <tr>
                                <td>{'Aluguel'} {':'}</td>
                                <td>{'R$ '}{'830,00'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ----------TOTAIS----------------- */}
                <div className="col-sm table-striped text-center">
                    <h2 >SALDO ATUAL</h2>
                    <div>
                        <h3 style={{ color: 'blue' }}>{'R$'}{'9.200,35'}</h3>
                    </div>
                    <h2 >EM ABERTO</h2>
                    <div>
                        <h3 style={{ color: 'red' }}>{'R$'}{'1.500,25'}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaMovto;

// {/* <div className="container">
//             <div className="row ">
//                 {/* ----------ENTRADAS----------------- */}
//                 <div className="col-sm table-striped text-center">
//                     <h2 style={{ color: 'green' }} >ENTRADAS</h2>
//                     <table className="table table-striped table-sm">
//                         <thead>
//                             <tr>
//                                 <th className="control-label col-lg-4">Total: </th>
//                                 <th className="control-label col-lg-3 monetario">{'R$ '}{'15.600,21'}</th>
//                             </tr>
//                         </thead>
//                         <tbody className="detalhes">
//                             <tr>
//                                 <td >{'Salário Ele'} {':'}</td>
//                                 <td className="monetario">{'R$ '}{'10.500,21'}</td>
//                             </tr>
//                             <tr>
//                                 <td >{'Salário Ela'} {':'}</td>
//                                 <td className="monetario">{'R$ '}{'5.100,00'}</td>
//                             </tr>
//                         </tbody>

//                     </table>
//                 </div>
//                 {/* ----------SAIDAS----------------- */}
//                 <div className="col-sm table-striped text-center">
//                     <h2 style={{ color: 'red' }} >SAÍDAS</h2>
//                     <table className="table table-striped table-sm">
//                         <thead>
//                             <tr>
//                                 <th className="control-label col-lg-4 ">Total: </th>
//                                 <th className="control-label col-lg-3 ">{'R$ '}{'8.625,21'}</th>
//                             </tr>
//                         </thead>
//                         <tbody className="detalhes">
//                             <tr>
//                                 <td>{'Aluguel'} {':'}</td>
//                                 <td>{'R$ '}{'830,00'}</td>
//                             </tr>
//                             <tr>
//                                 <td>{'Cartão NuBank'} {':'}</td>
//                                 <td>{'R$ '}{'2.100,00'}</td>
//                             </tr>
//                             <tr>
//                                 <td>{'Cartão Brad'} {':'}</td>
//                                 <td>{'R$ '}{'1.100,00'}</td>
//                             </tr>
//                             <tr>
//                                 <td>{'Condomínio'} {':'}</td>
//                                 <td>{'R$ '}{'330,00'}</td>
//                             </tr>
//                             <tr>
//                                 <td>{'Energia'} {':'}</td>
//                                 <td>{'R$ '}{'100,00'}</td>
//                             </tr>
//                             <tr>
//                                 <td>{'Internet'} {':'}</td>
//                                 <td>{'R$ '}{'90,00'}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* ----------TOTAIS----------------- */}
//                 <div className="col-sm table-striped text-center">
//                     <h2 >SALDO ATUAL</h2>
//                     <div>
//                         <h3 style={{color:'blue'}}>{'R$'}{'9.200,35'}</h3>
//                     </div>
//                     <h2 >EM ABERTO</h2>
//                     <div>
//                     <h3 style={{color:'red'}}>{'R$'}{'1.500,25'}</h3>
//                     </div>
//                 </div>
//             </div>
//         </div> */}