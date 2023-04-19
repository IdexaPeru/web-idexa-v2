import Image from "next/image";
import {
    MSG_WP_ASESOR,
    MSG_WP_DISENIO,
    MSG_WP_SOPORTE,
    NUMERO_MOVIL,
} from "../Variables/globales";

const MasServicios = () => {
    return (
        <section className="flex gap-10 py-10 flex-col max-w-7xl px-10 md:px-20 mx-auto scroll-pt-20 ">
            <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold">
                Mas Servicios Informáticos
            </h2>

            <div
                id="soporte"
                className="grid grid-cols-12 gap-10 scroll-mt-[70px]"
            >
                <div className="col-span-3 sm:col-span-2">
                    <Image
                        width={500}
                        height={500}
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Leonardo_Diffusion_cute_illustration_of_a_happy_computer_engi_3_uhqyni.jpg"
                        alt=""
                        className="rounded-xl h-full w-full object-cover "
                    />
                </div>
                <div className="col-span-7 sm:col-span-9">
                    <h3 className="font-poppins text-xl sm:text-2xl font-extrabold">
                        Soluciones tecnológicas al instante: <br /> Soporte
                        Técnico
                    </h3>
                    <p className="text-lg leading-relaxed sm:text-xl pr-10 sm:pr-0">
                        Nuestro equipo de expertos en Soporte Técnico está
                        disponible en todo momento para brindar soluciones
                        tecnológicas rápidas y eficientes a cualquier problema
                        que puedas enfrentar en tus dispositivos y sistemas.
                    </p>
                </div>
                <div className="col-span-1  flex items-center justify-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${NUMERO_MOVIL}?text=${MSG_WP_SOPORTE}`}
                        className="hover:bg-fuchsia-200 p-5 rounded-full cursor-pointer ease-in-out duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-fuchsia-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <div
                id="disenio"
                className="grid grid-cols-12 gap-10 scroll-mt-[70px]"
            >
                <div className="col-span-3 sm:col-span-2">
                    <Image
                        width={500}
                        height={500}
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144332/IDEXA%20PERU/yelsino_colorful_image_to_present_the_theme_graphic_design_repr_09fac712-f511-4b68-bdd4-6d73a0b015a1_altfvd.png"
                        alt=""
                        className="rounded-xl h-full w-full object-cover "
                    />
                </div>
                <div className="col-span-7 sm:col-span-9">
                    <h3 className="font-poppins text-xl sm:text-2xl font-extrabold">
                        Impacta con diseños creativos personalizados: <br />{" "}
                        Diseño Grafico
                    </h3>
                    <p className="text-lg leading-relaxed sm:text-xl pr-10 sm:pr-0">
                        Gráficos altamente creativos y experimentados están a tu
                        disposición para ofrecerte soluciones de diseño
                        personalizadas que harán destacar tu marca y capturarán
                        la atención de tu público objetivo.
                    </p>
                </div>
                <div className="col-span-1  flex items-center justify-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${NUMERO_MOVIL}?text=${MSG_WP_DISENIO}`}
                        className="hover:bg-fuchsia-200 p-5 rounded-full cursor-pointer ease-in-out duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-fuchsia-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <div
                id="asesoramiento"
                className="grid grid-cols-12 gap-10 scroll-mt-[64px]"
            >
                <div className="col-span-3 sm:col-span-2">
                    <Image
                        width={500}
                        height={500}
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144361/IDEXA%20PERU/DreamShaper_32_deadpool_with_computer_programming_hacker_background_mysteri_6_axfzls.jpg"
                        alt=""
                        className="rounded-xl h-full w-full object-cover"
                    />
                </div>
                <div className="col-span-7 sm:col-span-9 ">
                    <h3 className="font-poppins text-xl sm:text-2xl font-extrabold">
                        Maximiza tu potencial digital: <br /> Asesoramiento
                        Informático
                    </h3>
                    <p className="text-lg leading-relaxed sm:text-xl pr-10 sm:pr-0">
                        Nuestros asesores informáticos están para ayudarte a
                        aprovechar al máximo las herramientas digitales, desde
                        optimizar procesos hasta ofrecer soluciones a medida que
                        satisfagan tus necesidades y objetivos.
                    </p>
                </div>
                <div className="col-span-1  flex items-center justify-center">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://wa.me/${NUMERO_MOVIL}?text=${MSG_WP_ASESOR}`}
                        className="hover:bg-fuchsia-200 p-5 rounded-full cursor-pointer ease-in-out duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-fuchsia-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MasServicios;
