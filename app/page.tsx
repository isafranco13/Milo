import Image from 'next/image';
import EmptyState from './components/EmptyState';
import Historial from './components/Historial';

export default function Home() {
  return (
    <main className="h-full">
      
      <div className="flex flex-row h-full">
      <div className="w-[30px]">
          <Historial /> 
      </div>
      <div className="hidden lg:block lg:pl-80 h-full w-full" >
          <EmptyState />
      </div>
      </div>
    </main>
  );
}
