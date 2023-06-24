import React from "react";
import "./carrinho.css";

const Carrinho = () => {
    return(
        <>
            <body>
                <div className="corpoCarrinho">
                    <table>
                        <tr>
                            <th className="thCarrinho">MEU CARRINHO</th>
                            <th>QUANTIDADE</th>
                            <th>UNITÁRIO</th>
                            <th>TOTAL</th>
                        </tr>
                        <tr>
                            <td className="tdCarrinho">
                                <div className="meuCarrinho">
                                    <img src="#imgProduto" alt="imagemProduto"/>
                                    <div className="descricao">
                                        <h1>
                                            <strong>Nome do produto<br/></strong>
                                        </h1><br/>
                                        <p>Cor: <strong>#cor do produto</strong></p><br/>
                                        <p>Tamanho: <strong>#tamanho do produto</strong></p><br/>
                                    </div>
                                </div>
                            </td>
                            <td className="tdQuantidade">
                                <div className="setarQuantidade">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <br/>
                                <button className="remover" onClick={() => removerDoCarrinho()}>Remover item</button>
                            </td>
                            <td className="tdUnitario">
                                <div className="unitario">
                                    <p className="riscado">R$ 219,00</p>
                                    <strong>R$ 219,00</strong>
                                </div>
                            </td>
                            <td className="tdTotal">
                                <div className="total">
                                    <p className="riscado">R$ 219,00</p>
                                    <strong>R$ 219,00</strong>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
        </>
    )
}

export default Carrinho;