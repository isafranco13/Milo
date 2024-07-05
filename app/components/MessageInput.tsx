"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({placeholder,id, type, required, register, errors}) => {
    return(
        <div className="relative w-full ">
            <input id={id} type={type} autoComplete={id} {...register(id, {required})} />
        </div>
    );
};

export default MessageInput;