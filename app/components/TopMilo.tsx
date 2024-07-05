import Image from 'next/image';

const TopMilo = () => {
    return(
        <div className=" bg-gray-100 w-full flex items-center rounded-t-l sm:px-4 py-3 px-4 lg:px-6 justify-between">  {/*Div de titulo */}
        <div className="flex justify-normal"> {/*Div logo y nombre */}
           &nbsp;&nbsp;&nbsp;
          <h1 className="font-bold text-[50px] text-[#2C4277] text-center">Milo</h1>
        </div> {/*Fin Div logo y nombre */}
        <h2 className="font-semibold text-[20px] italic text-[#98A8C4] text-center">La clave para un análisis eficiente</h2>
      {/*Fin Div de titulo */}</div> 
    );
}
export default TopMilo;