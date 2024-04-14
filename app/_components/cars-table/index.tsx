import React from "react";
import { BiPlus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface Car {
    img: string;
    name: string;
    price: string;
    details: string;
    yearManufacture: string;
}

const CarsTable = () => {
    const cars: Car[] = [
        {
            img: "https://dsae.s3.amazonaws.com/00434116001291/Fotos/0K0114_01.jpg?u=20230724163509&auto=format&ixlib=react-9.5.1-beta.1&w=291&h=207&dpr=1&q=75",
            name: "FIAT PULSE 1.3 Turbo 270 Abarth",
            price: "140.000",
            details: "0 KM | Automático | Flex",
            yearManufacture: "2024",
        },
        {
            img: "https://dsae.s3.amazonaws.com/07462149000131/Fotos/0K0213_01.jpg?u=20230915154104&auto=format&ixlib=react-9.5.1-beta.1&w=291&h=207&dpr=1&q=75",
            name: "CITROËN C4 CACTUS 1.6 THP Noir Eat6",
            price: "124.000",
            details: "0KM | Automático | Flex",
            yearManufacture: "2024",
        },
        {
            img: "https://dsae.s3.amazonaws.com/87317789000197/Fotos/0K0246_01.jpg?u=20230814182046&auto=format&ixlib=react-9.5.1-beta.1&w=291&h=207&dpr=1&q=75",
            name: "PEUGEOT 208 1.0 Firefly Style",
            price: "80.000",
            details: "0 KM | Manual | Flex",
            yearManufacture: "2024",
        },
        {
            img: "https://dsae.s3.amazonaws.com/18320255000288/Fotos/0K0485_01.jpg?u=20230728112918&auto=format&ixlib=react-9.5.1-beta.1&w=291&h=207&dpr=1&q=75",
            name: "JEEP COMMANDER 2.0 Td380 Turbo Overland",
            price: "300.000",
            details: "0 Km | Automático | Diesel",
            yearManufacture: "2024",
        },
    ];

    return (
        <div className='bg-gray-200 border-2 border-white'>
            <div className='ml-4 font-semibold text-1xl mb-1 mt-2 text-[#006494]'>
                <h2>Selecione um carro</h2>
            </div>
            <div className='ml-4 font-semibold text-1xl mb-1 mt-2 text-[#006494] flex justify-center'>
                <input
                    type='text'
                    placeholder='Pesquise pelo carro'
                    className='w-[60%] h-10 text-center rounded'
                />
                <button className='w-10 h-10 bg-[#006494] text-white font-bold text-2xl flex justify-center rounded ml-[-5px]'>
                    <CiSearch className='mt-2' />
                </button>
            </div>
            <div className='m-4'>
                <table className='w-[100%] text-start border-collapse'>
                    <thead>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='p-3'>Modelo</th>
                            <th>Preço</th>
                            <th>Detalhes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr
                                className='border-b-2 border-gray-100'
                                key={index}
                            >
                                <td className='p-3'>{car.name}</td>
                                <td>
                                   R$ {car.price}
                                </td>
                                <td>{car.details} - {car.yearManufacture}</td>
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

export default CarsTable;
