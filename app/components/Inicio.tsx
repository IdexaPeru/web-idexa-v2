import Image from "next/image";
import { MSG_WP_GENERAL, NUMERO_MOVIL } from "../Variables/globales";
import { MOTOR } from "../Variables/imagenes";

const Inicio = () => {
    return (
        <section
            id="inicio"
            className="flex mx-auto  max-w-7xl px-10 sm:px-20  altoinicio items-center h-[90vh] "
        >
            <div className=" w-full ">
                <div className={`w-full mx-auto md:mx-0 md:w-1/2 `}>
                    <h2
                        className={`font-black text-4xl xl:text-5xl font-poppins`}
                    >
                        <span className="text-blue_primary">Educación</span>{" "}
                        <br /> y servicios de <br />{" "}
                        <span className="text-blue_primary">informática</span> ,
                        en idexa <br /> desarrollamos tus ideas
                    </h2>
                    <p className="text-lg text-gray-500  font-normal">
                        Brindamos soluciones innovadoras y eficientes para
                        satisfacer las necesidades de nuestros
                        clientes.Ofrecemos una amplia gama de servicios y cursos
                        de tecnología para ayudarlo a mantenerse a la vanguardia
                        en la era digital actual.
                    </p>
                </div>
                <div className="select-none flex flex-col gap-5  items-center text-xl mt-10 sm:flex-row sm:justify-center md:w-1/2 md:justify-start ">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${NUMERO_MOVIL}?text=${MSG_WP_GENERAL}`}
                        className="px-10 py-3 shadow-lg hover:shadow-2xl transition ease-in duration-300 hover:text-blue_light bg-blue_primary font-medium  rounded-full text-white "
                    >
                        Contactar
                    </a>
                </div>
            </div>
            <div className="  relative hidden   justify-center  items-end md:flex md:absolute md:w-1/2 right-5 ">
                <div className="ball pt-10">
                    <Image 
                       width={300}
                       height={300}
                      src={MOTOR} alt="servicio informatico" />
                </div>
            </div>
        </section>
    );
};

export default Inicio;
