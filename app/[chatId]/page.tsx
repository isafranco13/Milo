import { useRouter } from 'next/navigation';
import React from 'react';
import EmptyState from '../components/EmptyState';
import Historial from '../components/Historial';

export default function Chat() {
    const router = useRouter();

    return (
    <main className="h-full">
      
      <div className="flex flex-row h-full">
      <div className="w-[30px]">
          <Historial /> 
      </div>
      <div className="hidden lg:block lg:pl-[200px] w-full" >
          <EmptyState />
          {}
      </div>
      </div>
    </main>
    )

}