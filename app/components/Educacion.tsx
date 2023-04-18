import Image from "next/image";
import Link from "next/link";

const Educacion = () => {
    return (
        <section
            className="grid grid-cols-12 gap-10 py-10 max-w-7xl px-10 md:px-20 mx-auto scroll-mt-[64px] "
            id="educacion"
        >
            <div className="col-span-4 flex items-center justify-center">
                <Image
                 width={1000}
                 height={1000}
                    className="h-full w-full object-cover rounded-2xl"
                    src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Default_adobe_illustrator_vector_2d_cat_programming_in_a_mac_l_3_a3837865-67bb-42e6-906e-1c0f15c802e4_1_zgnlfw.jpg"
                    alt=""
                />
            </div>
            <div className="col-span-8">
                <p className="text-gray-500">Educación virtual</p>
                <p className="font-poppins text-4xl sm:text-5xl font-extrabold">
                    Comienza tu mundo <br /> tecnológico
                </p>
                <div className="pt-10 flex flex-col gap-y-10">
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            01
                        </span>{" "}
                        Aprende nociones básicas del <br /> mundo de la
                        informática
                    </p>
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            02
                        </span>{" "}
                        Conocé, crea y presume <br /> sus habilidades
                        tecnologicas
                    </p>
                    <p className="font-medium text-lg sm:text-2xl flex items-center gap-x-8">
                        {" "}
                        <span className="border border-blue_primary text-blue_primary rounded-t-3xl rounded-b-3xl w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center text-xl sm:text-2xl font-extrabold font-poppins">
                            03
                        </span>{" "}
                        Totalmente gratis, <br /> con instructores
                        experiementados
                    </p>
                </div>
            </div>
            <div className="col-span-full text-lg sm:text-xl flex flex-col gap-y-5 ">
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
                    <Link href="/educacion" className="items-center gap-x-3 hover:bg-fuchsia-300 bg-fuchsia-200 ease-in-out duration-500 p-3 inline-flex">
                        <span>Empieza ahora </span>
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
                    </Link>
            </div>
        </section>
    );
};

export default Educacion;
