import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className=" w-full flex items-center border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between shadow-sm">  {/*Div de titulo */}
        <h1 className="font-bold text-[70px] text-[#2C4277] text-center">Milo</h1>
        <Image src="/MiloV1r.png" alt="Milo" width={100} height={100} />
        <h2 className="font-semibold text-[20px] italic text-[#98A8C4] text-center">La clave para un análisis eficiente</h2>
      </div> {/*Fin Div de titulo */}
    </main>
  );
}
