"use client";
import Image from 'next/image';
import EmptyState from './components/EmptyState';
import Historial from './components/Historial';
import { useState, useEffect } from 'react';
import {streamReader} from "openai-edge-stream";
import TopMilo from "./components/TopMilo";
import {v4 as uuid} from "uuid";

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
    /*const res = await fetch("/api/generate", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message: message}),
    });*/
    setMessage("");
    //const data= res.body;
 // const data = await res.json();
  //console.log(data);
    /*if(!data){
      throw new Error("No sirve la api alv");   
    }*/
    //const reader= data.getReader();
    /*await streamReader(reader, (message) =>{
        console.log("Message AI:", message)
        //Debe de poder verse la respuesta en pantalla
    });*/
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
