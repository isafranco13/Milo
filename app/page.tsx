import Image from 'next/image';
import EmptyState from './components/EmptyState';
import Historial from './components/Historial';

export default function Home() {
  return (
    <main className="h-full">
      <div className=" w-full flex items-center border-b-[1px] sm:px-[150px] py-2 px-[20px] lg:px-2 justify-between shadow-sm">  {/*Div de titulo */}
        <div className="flex justify-normal"> {/*Div logo y nombre */}
          <Image src="/MiloV1r.png" alt="Milo" width={100} height={100} /> &nbsp;&nbsp;&nbsp;
          <h1 className="font-bold text-[70px] text-[#2C4277] text-center">Milo</h1>
        </div> {/*Fin Div logo y nombre */}
        <h2 className="font-semibold text-[20px] italic text-[#98A8C4] text-center">La clave para un análisis eficiente</h2>
      </div> {/*Fin Div de titulo */}
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
