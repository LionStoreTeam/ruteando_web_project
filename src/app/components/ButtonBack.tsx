import { useRouter } from 'next/navigation';

const ButtonBack = () => {
    const router = useRouter();

    const handleRegresar = () => {
        router.back();
    }
    return (
        <button className='m-5 p-2 rounded-xl text-white bg-blue-500'
            onClick={handleRegresar}
        >
            Regresar
        </button>
    );
}

export default ButtonBack;