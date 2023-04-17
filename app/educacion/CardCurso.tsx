import ModalSuscrib from "./ModalSuscrib";

const CardCurso = () => {
    return (
        <div className="bg-gray-50 rounded-t-lg w-60 ">
            <img src="/pensando.png" alt="" className="object-cover" />
            <div className="px-4 flex flex-col gap-y-3">
                <h3 className="text-lg font-bold">
                    Arquitectura Hexagonal en Frontend
                </h3>
                <p className="text-gray-700">
                    Aprende y domina el desarrollo de sistemas de manera
                    profesional, lo que todas las empresas utilizan.
                </p>
                <button className="text-fuchsia-500 bg-fuchsia-200  px-3 py-3 self-start hover:bg-fuchsia-300  ease-in-out duration-500">
                    Ver curso
                </button>
                <ModalSuscrib/>
            </div>
        </div>
    );
};

export default CardCurso;
