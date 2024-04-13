"use client";
import Image from "next/image";
import React from "react";
import salesChart from "./img/image.png";
import percentualSalesChart from "./img/image copy.png";

const SalesChart = () => {
    return (
        <div className='py-16 bg-gray-200 mt-5'>
            <div className='ml-4 font-semibold text-3xl mb-8 mt-[-10px]'>
                <h2 className="text-[#006494]">Gráficos</h2>
            </div>
            <div className='inline-flex space-x-40'>
                <div className='ml-5'>
                    <p className='mb-4 text-gray-500 font-semibold text-lg'>
                        Carros mais vendidos em 2023
                    </p>
                    <Image
                        src={salesChart}
                        alt='gráfico de vendas'
                        width={800}
                        height={500}
                    />
                </div>
                <div className='ml-5'>
                    <p className='mb-4 text-gray-500 font-semibold text-lg'>
                        Percentual de crescimento de vendas (todo período)
                    </p>
                    <Image
                        src={percentualSalesChart}
                        alt='gráfico de vendas'
                        width={800}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default SalesChart;
