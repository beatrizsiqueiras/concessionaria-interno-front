"use client";

import {
    PiCalendarPlusThin,
    PiCarThin,
    PiChartLineUpThin,
    PiChatsCircleThin,
    PiIdentificationCardThin,
    PiMoneyThin,
    PiNotebookThin,
    PiPlusThin,
    PiUserPlusThin,
} from "react-icons/pi";

const Cards = () => {
    return (
        <div className='py-16 bg-gray-200'>
            <div className='ml-4 font-semibold text-3xl text-[#006494]'>
                <h2>Ações rápidas</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10 m-4'>
                <a href='/client/create'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3'>
                            <PiUserPlusThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Cadastrar Cliente
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Temos <strong>459</strong> clientes
                                    cadastrados
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3 mb-7 ml-3'>
                            <PiCarThin />
                            <PiPlusThin
                                size={40}
                                className='mt-[-65px] ml-[60px]'
                            />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Cadastrar Veículo
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Temos <strong>1.082</strong> veículos
                                    cadastrados
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/sale/create'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3 ml-2'>
                            <PiMoneyThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Nova Venda
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Temos <strong>3.090</strong> vendas
                                    efetuadas
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mb-7 mt-3'>
                            <PiIdentificationCardThin />
                            <PiPlusThin
                                size={40}
                                className='mt-[-65px] ml-[60px]'
                            />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Cadastrar Despachante
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Temos <strong>204</strong> despachantes
                                    cadastrados
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3'>
                            <PiChatsCircleThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Mensagens
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Você tem <strong>2</strong> mensagens não
                                    visualizadas
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3 ml-3'>
                            <PiCalendarPlusThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Agenda
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>
                                    Você tem <strong>6</strong> compromissos
                                    para essa semana
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3'>
                            <PiNotebookThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Relatórios
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>Acesse os relatórios de todos os módulos</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-7xl mt-3 ml-3'>
                            <PiChartLineUpThin />
                        </div>
                        <div className='p-5'>
                            <h3 className='mb-1 mt-1 text-xl font-bold'>
                                Metas
                            </h3>
                            <div className='flex items-center gap-2 mt-2'>
                                <p>Acesse as metas da PrimeDrive</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Cards;
