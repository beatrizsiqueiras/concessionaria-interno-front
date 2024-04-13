import React from "react";

interface Client {
    name: string;
    phone: string;
    state: string;
    city: string;
    status: boolean;
}

const RecentsClientsList = () => {
    const clientsList: Client[] = [
        {
            name: "Wemerson S. E.",
            phone: "(11) 1234-5678",
            state: "SP",
            city: "São Paulo",
            status: true,
        },
        {
            name: "Anderson Silva",
            phone: "(31) 5555-6666",
            state: "MG",
            city: "Belo Horizonte",
            status: true,
        },
        {
            name: "Luiz Scofield",
            phone: "(41) 2222-3333",
            state: "PR",
            city: "Curitiba",
            status: false,
        },
        {
            name: "Joao Vitor Sena",
            phone: "(51) 9999-8888",
            state: "RS",
            city: "Porto Alegre",
            status: true,
        },
        {
            name: "Beatriz Siqueira",
            phone: "(61) 7777-8888",
            state: "DF",
            city: "Brasília",
            status: false,
        },
    ];

    return (
        <div className='py-16 bg-gray-200 mt-5'>
            <div className='ml-4 font-semibold text-3xl mb-8 mt-[-10px] text-[#006494]'>
                <h2>Clientes Recentes</h2>
            </div>
            <div className="m-12">
                <table className='w-[100%] text-center border-collapse'>
                    <thead>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='p-3'>Nome</th>
                            <th>Telefone</th>
                            <th>Estado</th>
                            <th>Cidade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsList.map((client, index) => (
                            <tr className='border-b-2 border-gray-100 '>
                                <td className='p-3'>{client.name}</td>
                                <td>{client.phone}</td>
                                <td>{client.state}</td>
                                <td>{client.city}</td>
                                <td>{client.status ? "Ativo" : "Inativo"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentsClientsList;
