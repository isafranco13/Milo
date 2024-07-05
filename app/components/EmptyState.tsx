import TopMilo from "./TopMilo"
import Body from "./Body";
import Form from "./Form";

const EmptyState = () => {
    return (
        <>
        <TopMilo/> 
        {/*px-[20px]
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        flex-row
        justify-center
        items-center
        bg-gray-100
        rounded-b-lg */}
        <div className="
        px-10
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        flex-row
        bg-gray-100
        rounded-b-lg">
            <div className="text-center items-center flex flex-col h-full w-full">
                    <Body /><br />
                    <Form />
            </div>
        </div>
        </>
    );
}
export default EmptyState;