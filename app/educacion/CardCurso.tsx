import Image from "next/image";
import ModalSuscrib from "./ModalSuscrib";

const CardCurso = ({curso}:any) => {
    return (
        <div className="bg-gray-50 rounded-t-lg w-60 ">
            <Image 
                width={500}
                height={500}
                src="/pensando.png" alt="" className="object-cover" />
            <div className="px-4 flex flex-col gap-y-3">
                <h3 className="text-lg font-bold">
                    {curso.titulo}
                </h3>
                <p className="text-gray-700">
                    {curso.descripcion}
                </p>
                <a 
                    target="_blank"
                    href={curso.url}
                    className="text-fuchsia-500 bg-fuchsia-200  px-3 py-3 self-start hover:bg-fuchsia-300  ease-in-out duration-500">
                    Ver curso
                </a>
                {/* <ModalSuscrib/> */}
            </div>
        </div>
    );
};

export default CardCurso;
