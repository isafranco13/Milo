"use client";
import React from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MessageInput from "./MessageInput";
import Image from 'next/image';
import { useState } from 'react';

const Form = ()  => {
    const [messageText, setMessageText] = useState("");
    const { register, handleSubmit, setValue, formState: { errors }} = useForm<FieldValues>({
    defaultValues: {
        message: '',
    },
});



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
            <form onSubmit={handleSubmit}> {/* style del form*/}
                <fieldset className="flex gap-2">
                    <textarea 
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Send a Message..." 
                    className="w-full resize-none rounded-md bg-white p-2 text-black border-none focus:outline-none"></textarea>
                    <button type="submit" className="rounded-full p-2 bg-[#2c4277] cursor-pointer hover:bg-[#23355e] transition w-[37px] h-[37px]">
                    <Image src="/enviar.png" alt="enviar" width={35} height={35} />
                    </button>
                </fieldset>
                
            </form>
        </div>
    );
}
export default Form;