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
  
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    messages: [{role: "system", content: "Tu eres Milo, Un asistente AI que forma parte de DataDoorAccess que ayuda a los usuarios con preguntas sobre los datos de asistencia de sus empleados, ellos te pasaran datos de nuestra aplicación y tu deberas darles lo que piden, sea un consejo o un resumen sobre que hacer."},
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
                <div className={`${mess.type === 'user' ? 'bg-[#929cca]': 'bg-[#a4a4cc]'} rounded-lg p-4 text-white
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
                    placeholder="Send a Message..." 
                    className="flex-grow px-4 py-2 resize-none rounded-md bg-white p-2 text-black border-none focus:outline-none"></textarea>
                    <button type="submit" className="rounded-full px-4 py-2 bg-[#2c4277] cursor-pointer hover:bg-[#23355e] transition w-[50px] h-[50px]">
                    <Image src="/enviar.png" alt="enviar" width={40} height={40} />
                    </button>
                    </div>

            </form>
            </div>
      </div>
      </div>
    </>
  );
}
