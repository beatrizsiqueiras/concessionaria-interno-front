"use client";

import { BiSolidMessageRounded } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaCar, FaChartLine, FaPlus } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { HiUserPlus } from "react-icons/hi2";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const Cards = () => {
    return (
        <div className='py-16 bg-gray-200'>
            <div className='ml-4 font-semibold text-3xl text-[#006494]'>
                <h2>Ações rápidas</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10 m-4'>
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-9xl mt-3'>
                            <HiUserPlus />
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
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-9xl mt-3 mb-11 ml-3'>
                            <FaCar />
                            <FaPlus
                                size={50}
                                className='mt-[-95px] ml-[130px]'
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
                <a href='/'>
                    <div className='bg-[#f4f5f8] shadow-lg rounded'>
                        <div className='relative text-9xl mt-3'>
                            <MdOutlinePointOfSale />
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
                        <div className='relative text-9xl mb-9 mt-3'>
                            <CgFileDocument />
                            <FaPlus
                                size={50}
                                className='mt-[-85px] ml-[119px]'
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
                        <div className='relative text-9xl mt-3'>
                            <BiSolidMessageRounded />
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
                        <div className='relative text-9xl mt-3 ml-3'>
                            <GrSchedule />
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
                        <div className='relative text-9xl mt-3'>
                            <TbReportAnalytics />
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
                        <div className='relative text-9xl mt-3 ml-3'>
                            <FaChartLine />
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
