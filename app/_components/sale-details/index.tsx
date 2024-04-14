import React from "react";
import { BiPlus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const SaleDetails = () => {
    return (
        <div className='bg-gray-200'>
            <div className='m-4'>
                <div className='grid grid-cols-3 gap-3 p-5'>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>Pagamento:</p>
                            <select
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            >
                                <option value='creditcard'>Selecione</option>
                                <option value='creditcard'>A prazo</option>
                                <option value='creditcard'>À vista</option>
                            </select>
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>Valor de Entrada (R$):</p>
                            <input
                                type='number'
                                min={0}
                                value={0.00}
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            />
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>
                                Forma de Pagamento (Entrada):
                            </p>
                            <select
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            >
                                <option value='creditcard'>Selecione</option>
                                <option value='creditcard'>Credito</option>
                                <option value='creditcard'>Débito</option>
                                <option value='creditcard'>Dinheiro</option>
                                <option value='creditcard'>Pix</option>
                                <option value='creditcard'>Boleto</option>
                                <option value='creditcard'>Carnê</option>
                            </select>
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>
                                Forma de Pagamento (Restante):
                            </p>
                            <select
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            >
                                <option value='creditcard'>Selecione</option>
                                <option value='creditcard'>Credito</option>
                                <option value='creditcard'>Débito</option>
                                <option value='creditcard'>Dinheiro</option>
                                <option value='creditcard'>Pix</option>
                                <option value='creditcard'>Boleto</option>
                                <option value='creditcard'>Carnê</option>
                            </select>
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>
                                Quantidade de Parcelas:
                            </p>
                            <select
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            >
                                <option value='creditcard'>Selecione</option>
                                <option value='12'>12</option>
                                <option value='20'>20</option>
                                <option value='24'>24</option>
                                <option value='30'>30</option>
                                <option value='48'>48</option>
                                <option value='64'>64</option>
                            </select>
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>Data de Entrega:</p>
                            <input
                                type='date'
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            />
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4'>
                                Condições de Venda:
                            </p>
                            <select
                                name=''
                                id=''
                                className='border-3 border-gray-500 bg-white h-14 w-[90%] text-center'
                            >
                                <option value='creditcard'>Selecione</option>
                                <option value='vendido_como_esta'>
                                    Vendido como Está (As-Is)
                                </option>
                                <option value='garantia_limitada'>
                                    Garantia Limitada
                                </option>
                                <option value='garantia_estendida'>
                                    Garantia Estendida
                                </option>
                                <option value='garantia_fabricante'>
                                    Garantia do Fabricante
                                </option>
                                <option value='inspecao_previa'>
                                    Inspeção Prévia
                                </option>
                                <option value='troca_devolucao'>
                                    Troca ou Devolução
                                </option>
                                <option value='acordo_pagamento'>
                                    Acordo de Pagamento
                                </option>
                                <option value='clausula_multa'>
                                    Cláusula de Multa
                                </option>
                                <option value='transferencia_responsabilidade'>
                                    Transferência de Responsabilidade
                                </option>
                                <option value='registro_taxas'>
                                    Registro e Taxas
                                </option>
                                <option value='entrega_veiculo'>
                                    Entrega do Veículo
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className='...'>
                        <div className='mt-6 block'>
                            <p className='font-bold mb-4 text-lg'>Total</p>
                            <p className='font-bold mb-4 text-3xl'>R$ 55.589</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols gap-3 p-5 mr-24 justify-center'>
                    <div className='mt-6 flex justify-end'>
                        <button
                            type='submit'
                            className='bg-green-600 text-white p-4 rounded font-bold'
                        >
                            Confirmar venda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleDetails;
