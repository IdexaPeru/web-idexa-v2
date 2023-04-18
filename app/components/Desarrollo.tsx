import Image from "next/image";
import { MSG_WP_DESARROLLO, NUMERO_MOVIL } from "../Variables/globales";

const Desarrollo = () => {
    return (
        <section
            className="grid grid-cols-12 gap-10 max-w-7xl mx-auto px-10 py-10 md:px-20 scroll-mt-[64px]"
            id="desarrollo"
        >
            <div className="col-span-8">
                <p className="text-gray-500">Desarrollo web</p>
                <p className="font-poppins text-4xl sm:text-5xl font-extrabold">
                    Crea herramientas <br /> web a su necesidad
                </p>
                <div className="pt-10 flex flex-col gap-y-10">
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            01
                        </span>{" "}
                        Diseño de sistemas web <br /> con aspectos unicos e
                        intuitivos
                    </p>
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            02
                        </span>{" "}
                        Hecho a la medida de las necesidades <br /> de su
                        empresa
                    </p>
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            03
                        </span>{" "}
                        Automátice sus procesos y gestione <br /> sus recursos
                        con sistemas avanzados
                    </p>
                </div>
            </div>
            <div className="col-span-4 flex items-center justify-center">
                <Image
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover rounded-2xl"
                    src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Leonardo_Diffusion_illustration_hyperrealistic_of_astronaut_fl_2_yqrg3v.jpg"
                    alt=""
                />
            </div>
            <div className="col-span-full text-lg sm:text-xl flex flex-col gap-y-5">
                <p className="">
                    Mejora tus habilidades informáticas con nuestra variedad de
                    cursos en ofimática, redes y desarrollo web. Aprende
                    habilidades esenciales y técnicas avanzadas con instructores
                    expertos y recursos de alta calidad.
                </p>
                <p>
                    Obtén una ventaja competitiva en tu carrera y mejora tu vida
                    diaria con nuestro catálogo de cursos. Descubre cómo el
                    aprendizaje de nuevas habilidades informáticas puede abrir
                    nuevas oportunidades y mejorar tus perspectivas de futuro.
                </p>
            </div>
            <div className="col-span-full text-fuchsia-500 text-2xl">
                <a
                    target="_blank"
                    href={`https://wa.me/${NUMERO_MOVIL}?text=${MSG_WP_DESARROLLO}`}
                    className=" items-center gap-x-3 hover:bg-fuchsia-300 bg-fuchsia-200 ease-in-out duration-500 p-3 inline-flex"
                >
                    <span>Contáctar </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Desarrollo;
