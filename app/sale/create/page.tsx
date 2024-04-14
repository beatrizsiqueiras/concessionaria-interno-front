"use client";

import CarsTable from "@/app/_components/cars-table";
import ClientsTable from "@/app/_components/clients-table";
import SaleDetails from "@/app/_components/sale-details";
import React, { useState } from "react";

const CreateSale = () => {
    const [isClientListVisible, setIsClientListVisible] = useState(true);
    const [isPaymentDetailsVisible, setIsPaymentDetailsVisible] =
        useState(false);
    const [isVehicleListVisible, setIsVehicleListVisible] = useState(false);

    const setClientSection = () => {};
    const setVehicleSection = () => {};
    const setPaymentDetailsSection = () => {};

    return (
        <div>
            <div className='grid grid-cols-6 gap-4'>
                <div className='col-start-1 col-span-6'>
                    <div className='py-16 bg-gray-200'>
                        <h2 className='text-center font-semibold text-3xl text-[#006494] mb-8'>
                            Nova Venda
                        </h2>
                        <div className='grid grid-cols-3 gap-5 m-1 bg-white p-6 rounded shadow-lg font-semibold text-lg'>
                            <a
                                href='#clientsList'
                                className='text-center hover:text-gray-500 w-[100%]'
                                onClick={setClientSection}
                            >
                                Selecionar Cliente
                            </a>
                            <a
                                href='#carsList'
                                className='text-center hover:text-gray-500 w-[100%]'
                                onClick={setVehicleSection}
                            >
                                Selecionar Veículos
                            </a>
                            <a
                                href='#paymentMethod'
                                className='text-center hover:text-gray-500 w-[100%]'
                                onClick={setPaymentDetailsSection}
                            >
                                Forma de Pagamento
                            </a>
                        </div>
                        <div className={isClientListVisible ? "" : "hidden"}>
                            <div
                                className='grid grid-cols-1 gap-5 m-5'
                                id='clientsList'
                            >
                                <ClientsTable />
                            </div>
                        </div>
                        <div className={isVehicleListVisible ? "" : "hidden"}>
                            <div
                                className='grid grid-cols-1 gap-5 m-5'
                                id='carsList'
                            >
                                <CarsTable />
                            </div>
                        </div>
                        <div
                            className={isPaymentDetailsVisible ? "" : "hidden"}
                        >
                            <div
                                className='grid grid-cols-1 gap-5 m-5'
                                id='paymentMethod'
                            >
                                <SaleDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSale;
