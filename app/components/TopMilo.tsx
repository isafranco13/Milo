import Image from 'next/image';

const TopMilo = () => {
    return(
        <div className=" w-full flex items-center sm:px- py-2 px-[20px] lg:px-2 justify-between ">  {/*Div de titulo */}
        <div className="flex justify-normal"> {/*Div logo y nombre */}
          <Image src="/MiloV1r.png" alt="Milo" width={100} height={100} /> &nbsp;&nbsp;&nbsp;
          <h1 className="font-bold text-[70px] text-[#2C4277] text-center">Milo</h1>
        </div> {/*Fin Div logo y nombre */}
        <h2 className="font-semibold text-[20px] italic text-[#98A8C4] text-center">La clave para un análisis eficiente</h2>
      {/*Fin Div de titulo */}</div> 
    );
}
export default TopMilo;