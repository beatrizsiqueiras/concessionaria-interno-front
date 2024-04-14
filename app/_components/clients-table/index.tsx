import React from "react";
import { BiPlus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface Client {
    name: string;
    registerNumber: string;
    state: string;
    city: string;
}

const ClientsTable = () => {
    const clientsList: Client[] = [
        {
            name: "Wemerson S. E.",
            registerNumber: "1112345678",
            state: "SP",
            city: "São Paulo",
        },
        {
            name: "Anderson Silva",
            registerNumber: "3155556666",
            state: "MG",
            city: "Belo Horizonte",
        },
        {
            name: "Luiz Scofield",
            registerNumber: "4122223333",
            state: "PR",
            city: "Curitiba",
        },
        {
            name: "Joao Vitor Sena",
            registerNumber: "5199998888",
            state: "RS",
            city: "Porto Alegre",
        },
        {
            name: "Beatriz Siqueira",
            registerNumber: "6177778888",
            state: "DF",
            city: "Brasília",
        },
    ];

    return (
        <div className='bg-gray-200 border-2 border-white'>
            <div className='ml-4 font-semibold text-1xl mb-1 mt-2 text-[#006494]'>
                <h2>Selecione um cliente</h2>
            </div>
            <div className='ml-4 font-semibold text-1xl mb-1 mt-2 text-[#006494] flex justify-center'>
                <input type="text" placeholder="Pesquise pelo cliente" className="w-[60%] h-10 text-center rounded"/>
                <button className="w-10 h-10 bg-[#006494] text-white font-bold text-2xl flex justify-center rounded ml-[-5px]"><CiSearch className="mt-2"/></button>
            </div>
            <div className='m-4'>
                <table className='w-[100%] text-center border-collapse'>
                    <thead>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='p-3'>Nome</th>
                            <th>CPF/CNPJ</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsList.map((client, index) => (
                            <tr
                                className='border-b-2 border-gray-100'
                                key={index}
                            >
                                <td className='p-3'>{client.name}</td>
                                <td>{client.registerNumber}</td>
                                <td>
                                    {client.state} - {client.city}
                                </td>
                                <td className='bg-[#006494] w-6 h-6 flex justify-center rounded-[100%]'>
                                    <a
                                        href=''
                                        className='text-center text-white text-xl'
                                    >
                                        <BiPlus />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className=''>
                            <td></td>
                            <td
                                colSpan={3}
                                className='text-center inline-flex text-3xl space-x-12'
                            >
                                <GrFormPrevious />
                                <MdNavigateNext />
                            </td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ClientsTable;
