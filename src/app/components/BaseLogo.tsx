import Image from "next/image";
import Link from "next/link";


const BaseLogo = () => {
    return (
        <div className="">
            <Link href="/">
                <Image src="/logo_transp.png" alt="first_home_base_logo" width={170} height={170} priority />
            </Link>
        </div>
    );
}

export default BaseLogo;