import TopMilo from "./TopMilo"

const EmptyState = () => {
    return (
        <>
        <TopMilo/> 
        <div className="
        px-4
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        flex-row
        justify-center
        items-center
        bg-gray-100
        rounded-b-lg">
            <div className="text-center items-center flex flex-col h-full">
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">Aqui debe de salir Milo!</h3>
            </div>
            
        </div>
        </>
    );
}
export default EmptyState;