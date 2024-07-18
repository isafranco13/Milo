"use client";
import React from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MessageInput from "./MessageInput";
import Image from 'next/image';

const Form = ()  => {
const { register, handleSubmit, setValue, formState: { errors }} = useForm<FieldValues>({
    defaultValues: {
        message: '',
    },
});

const onSumbit: SubmitHandler<FieldValues> = (data) => {
    {/* Aqui debe de ir la funcion POST para enviar los mensajes a la API*/}
    setValue ('message', '', {shouldValidate: true});
};

    return(
        <div >{/*className="
        py-4
        px-4
        bg-gray-100
        flex
        items-center
        gap-2
        lg:gap-4
        w-full" */}
            <form onSubmit={handleSubmit(onSumbit)}> {/* style del form*/}
                <fieldset className="flex gap-2">
                    <textarea className="w-full resize-none rounded-md bg-white p-2 text-black border-none"></textarea>
                    <button type="submit" className="rounded-full p-2 bg-[#2c4277] cursor-pointer hover:bg-[#23355e] transition w-[37px] h-[37px]">
                    <Image src="/enviar.png" alt="enviar" width={35} height={35} />
                    </button>
                </fieldset>
                
            </form>
        </div>
    );
}
export default Form;