import Image from "next/image";

export default async function Academy() {
    return(
        <div className="flex h-[calc(100vh-100px)] items-center">
            <Image
                className=""
                width={200}
                height={0}
                src="/logo.png"
                alt="MyWay"
            />
        </div>
    );
}