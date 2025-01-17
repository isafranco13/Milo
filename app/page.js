"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {streamReader} from "openai-edge-stream";
import OpenAI from "openai";
import TopMilo from "./components/TopMilo";
import axios from "axios";

export default function Home() {
  const [incomingMessage, setIncomingMessage] = useState("");
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]); //para el envio de nuevos mensajes del usuario
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSumbit = async (e) => {
    e.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog,
      {type: "user",
      message: message,
      }]
    )
    console.log("MessageText:", message);
    sendMessage(message);
    setMessage("");
    /*const res = await fetch("/api/generate", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message: message}),
    });*/
}
 const sendMessage = (message) => {
   const url = "https://api.openai.com/v1/chat/completions";
   const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
   };
   const data = {
    model: "gpt-3.5-turbo",
    messages: [{role: "system", content: "Tu eres Milo, Un asistente IA que forma parte de DataDoorAccess que ayuda a los usuarios con preguntas sobre los datos que genera nuestra aplicación"
      + ", ellos te pasaran datos de nuestra aplicación como lo son: que porcentaje hay mas de un area a otra de su organización, etc"
      +" deberas entregarles lo que piden ya sea un consejo para aumentar la productividad o ventas o como mejorar un area."},
      {role: "user", "content": message}]
   };
   setIsLoading(true);
   
   axios.post(url, data, {headers: headers}).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, {type: "bot", message: response.data.choices[0].message.content}]);
      setIsLoading(false);
   }).catch((error) => {
      setIsLoading(false);
      console.log(error);
   })
 }

  return (
    <>
      <div className="container mx-auto w-screen">
      <div className="flex flex-col h-screen">
         <TopMilo />
        <div className="flex-grow p-6"> {/*div que da forma al chat */}
        <div className="flex flex-col space-y-4"> {/*Div del chat */}
            {chatLog.map((mess, index) => (
              <div key="index" className={`flex ${mess.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${mess.type === 'user' ? 'bg-[#7a7a9b]': 'bg-[#2c4277]'} rounded-lg p-4 text-white
                max-w-sm`}>{mess.message}</div> {/*div del mensaje */}
              </div>
            ))}
            </div> {/*fin del div que forma al chat */}
            </div>{/*fin del del chat */}
            <div > {/*Div del form */}
            <form onSubmit={handleSumbit} className="flex-none p-6"> {/* style del form*/}
                    <div className="flex">
                    <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escriba su Mensaje..." 
                    className="flex-grow px-4 py-2 resize-none rounded-full bg-white p-2 text-black text-lg border-none focus:outline-none"></textarea>&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="rounded-full px-4 py-4 bg-[#2c4277] cursor-pointer hover:bg-[#23355e] transition w-[60px] h-[60px]">
                    <Image src="/enviar.png" alt="enviar" width={50} height={50} />
                    </button>
                    </div>

            </form>
            </div>
      </div>
      </div>
    </>
  );
}
