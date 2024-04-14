"use client";

import React, { useState } from "react";

const CreateClient = () => {
    const [isIndividualPerson, setIsIndividualPerson] = useState(false);
    const [isLegalEntity, setIsLegalEntity] = useState(false);

    const indiviualPerson = () => {
        setIsIndividualPerson(isIndividualPerson ? false : true);
        setIsLegalEntity(false);

        const legalEntityCheckbox = document.getElementById(
            "isLegalEntity"
        ) as HTMLInputElement;
        if (!isIndividualPerson) {
            legalEntityCheckbox.disabled = true;
        } else {
            legalEntityCheckbox.disabled = false;
        }
    };

    const legalEntity = () => {
        setIsLegalEntity(isLegalEntity ? false : true);
        setIsIndividualPerson(false);

        const indiviualPersonCheckbox = document.getElementById(
            "isIndiviualPerson"
        ) as HTMLInputElement;

        if (!isLegalEntity) {
            indiviualPersonCheckbox.disabled = true;
        } else {
            indiviualPersonCheckbox.disabled = false;
        }
    };

    return (
        <div>
            <div className='grid grid-cols-3 gap-3 p-5'>
                <div className='col-start-1 col-span-3 mt-6'>
                    <h3 className='text-2xl text-center font-bold'>
                        Cadastro de Cliente
                    </h3>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>Nome completo:</p>
                        <input
                            placeholder='Insira o nome completo'
                            type='text'
                            name='name'
                            id='name'
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                            required
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>E-mail:</p>
                        <input
                            placeholder='Insira o e-mail'
                            type='email'
                            name=''
                            id=''
                            required
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>CEP:</p>
                        <input
                            placeholder='Insira o CEP'
                            type='text'
                            name=''
                            id=''
                            required
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>Rua:</p>
                        <input
                            placeholder='Insira a rua'
                            type='text'
                            name=''
                            id=''
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>Bairro:</p>
                        <input
                            placeholder='Insira a rua'
                            type='text'
                            name=''
                            id=''
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>Número:</p>
                        <input
                            placeholder='Insira o número'
                            type='text'
                            name=''
                            id=''
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 block'>
                        <p className='font-bold mb-4'>Complemento:</p>
                        <input
                            placeholder='Insira o complemento'
                            type='text'
                            name=''
                            id=''
                            className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                        />
                    </div>
                </div>
                <div className='...'>
                    <div className='mt-6 inline-flex'>
                        <div>
                            <p className='font-bold mb-4'>Pessoa física</p>
                            <input
                                placeholder='Insira o número'
                                type='checkbox'
                                name=''
                                id='isIndiviualPerson'
                                className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                onChange={indiviualPerson}
                            />
                        </div>
                        <div className=' ml-14'>
                            <p className='font-bold mb-4'>Pessoa jurídica</p>
                            <input
                                placeholder='Insira o número'
                                type='checkbox'
                                name=''
                                id='isLegalEntity'
                                className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                onChange={legalEntity}
                            />
                        </div>
                    </div>
                </div>

                {isIndividualPerson ? (
                    <>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>
                                    Data de Nascimento:
                                </p>
                                <input
                                    placeholder='Insira a data de nascimento'
                                    type='date'
                                    pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
                                    name=''
                                    id=''
                                    required
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>CPF:</p>
                                <input
                                    placeholder='Insira o CPF'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>RG:</p>
                                <input
                                    placeholder='Insira o RG'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>Estado civil:</p>
                                <input
                                    placeholder='Insira o estado civil'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
                {isLegalEntity ? (
                    <>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>CNPJ:</p>
                                <input
                                    placeholder='Insira o CNPJ'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>Razão Social:</p>
                                <input
                                    placeholder='Insira a razão social'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>
                                    Inscrição Estadual:
                                </p>
                                <input
                                    placeholder='Insira o estado civil'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                        <div className='...'>
                            <div className='mt-6 block'>
                                <p className='font-bold mb-4'>
                                    Natureza Jurídica:
                                </p>
                                <input
                                    placeholder='Insira a Natureza Jurídica'
                                    type='text'
                                    name=''
                                    id=''
                                    className='border-3 border-gray-500 bg-gray-100 h-14 w-[90%] text-center'
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
            <div className='grid grid-cols gap-3 p-5 mr-24 justify-center'>
                    <div className='mt-6 flex justify-end'>
                        <button
                            type='submit'
                            className='bg-green-600 text-white p-4 rounded font-bold'
                        >
                            Confirmar venda
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default CreateClient;
