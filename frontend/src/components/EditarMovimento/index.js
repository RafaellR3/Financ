import React, { useState } from "react";

const EditarMovimento = ({onClose = () => {}, movimento, atualizarMovimento})=> {
  const [descricao, setDescricao] = useState(movimento.descricao);
  const [valor, setValor] = useState(movimento.valor);

  const onClick = () => {
      atualizarMovimento(movimento.idmovimento, movimento.idmes, descricao, valor, movimento.tipo, movimento.datavencto);
      onClose();
  }

  return (
    <div className = "modal">
      <div className=" container">   
        <button className="close" onClick={onClose}/>   
        <div className=" col-sm table-striped text-left  50%" >
            <table className=" table table-striped table-sm">
                <thead className="text-center">
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td><input  id="idDescricao"
                                    className="btn btn-light btn-sm left border" 
                                    placeholder="Descrição"  
                                    type="text"  
                                    value = {descricao}
                                    onChange={(e) => setDescricao(e.target.value)} /></td>
                        <td><input className="btn btn-light btn-sm left border" 
                                   placeholder="Valor" 
                                   type='number' value={valor} 
                                   onChange={(e) => setValor(Number(e.target.value))} /></td>
                        <td></td>
                        <button className = "btn btn-primary btn-lg" width="30px" onClick={onClick} > Salvar
                        </button>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className=" col-sm"></div>
        <div className=" col-sm"></div>
      </div>
    </div>
 )
}


export default EditarMovimento;