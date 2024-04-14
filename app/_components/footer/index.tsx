import React from "react";
import { PiChatsTeardropThin } from "react-icons/pi";

import {
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialLinkedin,
    SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
    return (
        <>
            <div className='py-20 bg-gray-200 text-[#006494] mt-3'>
                <div className='grid grid-cols-5 gap-5 mt-10 m-10'>
                    <div className='row-span-2'>
                        <div className='flex align-text-bottom justify-start mt-5'>
                            <p className='text-4xl'>PrimeDrive</p>
                        </div>
                        <div className='grid grid-cols-5 mt-5'>
                            <div className='bg-[#006494] w-7 flex justify-center h-6 rounded-[100%]'>
                                <a href='' className=' text-white mt-1'>
                                    <SlSocialInstagram />
                                </a>
                            </div>
                            <div className='bg-[#006494] w-7 flex justify-center h-6 rounded-[100%]'>
                                <a href='' className=' text-white mt-1'>
                                    <SlSocialFacebook />
                                </a>
                            </div>
                            <div className='bg-[#006494] w-7 flex justify-center h-6 rounded-[100%]'>
                                <a href='' className=' text-white mt-1'>
                                    <SlSocialLinkedin />
                                </a>
                            </div>
                            <div className='bg-[#006494] w-7 flex justify-center h-6 rounded-[100%]'>
                                <a href='' className=' text-white mt-1'>
                                    <SlSocialYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-2'>
                        <h4 className='uppercase font-bold'>INSTITUCIONAL</h4>
                        <p>Nossas Lojas</p>
                        <p>Política de Privacidade</p>
                        <p>Resolução Banco Central</p>
                    </div>
                    <div className='row-span-2'>
                        <h4 className='uppercase font-bold'>PÓS VENDAS</h4>
                        <p>Revisão</p>
                        <p>Outros</p>
                    </div>
                    <div className='row-span-2'>
                        <h4 className='uppercase font-bold'>OUTROS SERVIÇOS</h4>
                        <p>Seguro</p>
                        <p>Consórcio</p>
                        <p>Blindados</p>
                    </div>
                    <div className='row-span-2'>
                        <h4 className='uppercase font-bold'>ATENDIMENTOS</h4>
                        <p>Fale conosco</p>
                        <p>Fornecedores</p>
                    </div>
                </div>
            </div>
            <button className='fixed bottom-4 right-4 bg-[#a5be00] hover:bg-[#c2d356] text-white font-bold py-2 px-4 rounded-[100%] h-16 w-30 shadow-md text-4xl'>
                <PiChatsTeardropThin />
            </button>
        </>
    );
};

export default Footer;
