import React from "react";
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsPersonPlus,
} from "react-icons/bs";

interface Car {
    img: string;
    name: string;
    price: string;
    details: string;
    yearManufacture: string;
}

const RecentsCars = () => {
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
        <div>
            <div className='grid grid-cols-6 gap-4 mt-4'>
                <div className='col-start-1 col-span-6'>
                    <div className='py-16 bg-gray-200'>
                        <h2 className='text-start font-semibold text-3xl text-[#006494] mb-10 ml-5'>
                            Veículos recentes
                        </h2>
                        <div className='grid grid-cols-4 gap-5 mt-1 m-14'>
                            {cars.map((car, index: number) => (
                                <div
                                    key={index}
                                    className='bg-[#f4f5f8] shadow-md'
                                >
                                    <div className='relative'>
                                        <img
                                            src={car.img}
                                            alt={car.name}
                                            className='w-full'
                                        />
                                    </div>
                                    <div className='p-5'>
                                        <h3 className='font-bold text-gray-700'>
                                            {car.name}
                                        </h3>
                                        <h2 className='mb-1 mt-1 text-2xl font-bold'>
                                            R$ {car.price}
                                        </h2>
                                        <div className='inline-flex'>
                                            <p>{car.details}</p>
                                            <span className='ml-2 text-blue-950 font-bold'>
                                                {car.yearManufacture}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='absolute -translate-x-0 -translate-y-[-400%] right-5 mr-[-15px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactRight size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentsCars;
