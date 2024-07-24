"use client";
import Image from 'next/image';
import EmptyState from './components/EmptyState';
import Historial from './components/Historial';
import { useState } from 'react';

export default function Home() {
  const [messageText, setMessageText] = useState("");
  return (
    <>
    <main className="h-full">
      
      <div className="flex flex-row h-full">
      <div className="w-[30px]">
          <Historial /> 
      </div>
      <div className="hidden lg:block lg:pl-[200px] w-full" >
          <EmptyState />
      </div>
      </div>
    </main>
    </>
  );
}
