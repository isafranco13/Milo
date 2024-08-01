"use client";
import Image from 'next/image';
import EmptyState from './components/EmptyState';
import Historial from './components/Historial';
import { useState, useEffect } from 'react';
import {streamReader} from "openai-edge-stream";
import TopMilo from "./components/TopMilo";
import OpenAI from "openai";
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
    message: [{role: "user", "content": message}]
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
    <main className="h-full">
      {/*<TopMilo/>*/} 
      <div className="flex flex-row h-full">
      <div className="w-[30px]">
          <Historial /> 
      </div>
      <div className=" lg:pl-[200px] w-full flex flex-col h-full " >
        <div className="flex-1">
            {chatLog.map((mess, index) => (
              <div key="index">{mess.message}</div>
            ))}</div>
            <div >{/*className="
        py-4
        px-4
        bg-gray-100
        flex
        items-center
        gap-2
        lg:gap-4
        w-full" */}
            <form onSubmit={handleSumbit}> {/* style del form*/}
                <fieldset className="flex gap-2">
                    <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a Message..." 
                    className="w-full resize-none rounded-md bg-white p-2 text-black border-none focus:outline-none"></textarea>
                    <button type="submit" className="rounded-full p-2 bg-[#2c4277] cursor-pointer hover:bg-[#23355e] transition w-[37px] h-[37px]">
                    <Image src="/enviar.png" alt="enviar" width={35} height={35} />
                    </button>
                </fieldset>
                
            </form>
        </div>
      </div>
      </div>
    </main>
    </>
  );
}
