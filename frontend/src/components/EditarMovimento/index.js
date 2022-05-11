import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "utils/requests";
import novo from "../../assests/img/novo.png";
import {Categoria } from "types/Categoria";

const EditarMovimento = ({onClose = () => {}, movimento, atualizarMovimento})=> {
  let config = {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem("token") }
  }

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState(movimento.descricao);
  const [valor, setValor] = useState(movimento.valor);

  const onClick = () => {
      if (!categoria){
        window.alert("Categoria não informada");}
      atualizarMovimento(movimento.idmovimento, movimento.idmes, descricao, valor, movimento.tipo, movimento.datavencto, categoria);
      onClose();
  }

  useEffect(() => {
    axios.get(`${Api}/Categoria/RecuperarPorTipo/${movimento.tipo}`, config)
        .then((response) => {
            setCategorias(response.data)
        })
        .catch((error) => {
            window.alert(`Erro ao carregar categorias de entrada. Erro: ${error}`)})
        });

  return (
    <div className = "modal">
      <div className=" container">   
        <button className="close" onClick={onClose}/>   
        <div className=" col-sm table-striped text-left  50%" >
            <table className=" table table-striped table-sm" >
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
                        <td><select className="form-control" value={categoria} onChange={e => setCategoria(e.target.value)}>
                                {(categorias && categorias.length > 0) && categorias.map((item) =>(
                                    <option value={item.idcategoria}> {item.descricao} </option>
                                ))}
                            </select>
                        </td>
                        <td><input className="btn btn-light btn-sm left border" 
                                   placeholder="Valor" 
                                   type='number' value={valor} 
                                   onChange={(e) => setValor(Number(e.target.value))} /></td>
                        <td></td>
                        <button className = "btn btn-primary btn-lg" width="30px" onClick={onClick} > 
                                        <img src={novo} alt="FinancR3" width="20" />
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