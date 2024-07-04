import Image from 'next/image';

const Historial = () => {
    return (
       <> 
       <div className="flex flex-col h-full items-center justify-center">
        <Image src="/MiloV1r.png" alt="Milo" width={100} height={100} />
        <div className="
        px-4
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        flex-row
        justify-center
        items-center">
            <h1>Historial</h1>
        </div>
        </div>
        </>
    );
}
export default Historial;