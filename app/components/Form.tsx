"use client";
import React from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MessageInput from "./MessageInput";

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
        <div className="
        py-4
        px-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
        rounded-lg">
            <form onSubmit={handleSubmit(onSumbit)}
            className="flex items-center gap-2 lg:gap-4 w-full">
                <MessageInput 
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder="Escribe un mensaje"
                />
            </form>
        </div>
    );
}
export default Form;