import CarsTable from "@/app/_components/cars-table";
import ClientsTable from "@/app/_components/clients-table";
import SaleDetails from "@/app/_components/sale-details";
import React from "react";

const CreateSale = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-4 mt-4'>
                <div className='col-start-1 col-span-6'>
                    <div className='py-16 bg-gray-200'>
                        <h2 className='text-center font-semibold text-3xl text-[#006494] mb-10'>
                            Nova Venda
                        </h2>
                        <div className='grid grid-cols-3 gap-5 m-5'>
                            <ClientsTable />
                            <CarsTable />
                            <SaleDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSale;
