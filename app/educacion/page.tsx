import Image from "next/image";
import { LOGO } from "../Variables/imagenes";
import CardCurso from "./CardCurso";

const cursos = [
    {
        id: "1",
        titulo: "OFIMÁTICA",
        descripcion: 'En este curso, te enseñaré cómo utilizar herramientas esenciales de oficina como Microsoft Word, Excel y PowerPoint para crear documentos, hojas de cálculo y presentaciones de alta calidad.',
        url: "https://www.youtube.com/playlist?list=PLfIlh8-vI3V6lMGkg7XBy1lHz5Q3cUX9f",
    },
    {
        id: "2",
        titulo: "JAVASCRIPT DESDE QUE SE PUSO BUENO",
        descripcion: 'Algunos de los temas que cubriremos incluyen: variables, tipos de datos, operadores, estructuras de control de flujo, funciones, objetos, arrays, eventos y manipulación del DOM.',
        url: "https://www.youtube.com/playlist?list=PLfIlh8-vI3V51xbyXipZHP__DfwMNTnMa",
    },

];

const EducacionPage = () => {
    return (
        <div className="pb-20">
            <header className=" w-full bg-white z-20 py-10">
                <div className="mx-auto max-w-7xl flex items-center justify-between  text-lg transition-all  ease-in-out duration-500 z-50 py-2 top-0 bg-white px-10 md:px-20">
                    <div className="flex items-center text-3xl font-poppins  gap-2">
                        <Image
                            width={300}
                            height={300}
                            src={LOGO}
                            className="w-14"
                            alt="logo de idexa peru"
                        />
                        <h1>
                            <span className="text-purple_primary">IDE</span>
                            <span className="text-blue_primary">XA</span>
                        </h1>
                    </div>
                    <nav className="flex gap-x-5 items-center justify-center">
                        <ul className=" hidden gap-3 absolute  mt-5 mr-10 sm:relative sm:flex sm:mt-0 sm:mr-0 transition ease-in duration-300 bg-white text-purple_normal items-center justify-center">
                            <li className="rounded-full px-3 py-2   cursor-pointer text-fuchsia-500 hover:border-fuchsia-500 hover:border ease-in-out duration-500">
                                <a href="">Inicia sesión</a>
                            </li>
                            <li className=" border rounded-full px-3 py-2 bg-black text-white ">
                                <a href="">Suscribete</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="max-w-7xl mx-auto px-10 sm:px-20 grid grid-cols-12">
                <div className="col-span-12 md:col-span-6  flex flex-col gap-y-5  text-lg">
                    <h1 className="text-5xl font-extrabold">
                        <span className="text-blue_primary">Educación</span>{" "}
                        <br />
                        Tecnológica
                    </h1>
                    <p>
                        Encuentra una amplia variedad de cursos que se adaptan a
                        tus necesidades y horarios, permitiéndote estudiar
                        cuando y donde quieras. Además, ofrecemos recursos
                        exclusivos como foros de discusión y tutorías
                        personalizadas.
                    </p>
                    <p>
                        No esperes más para seguir avanzando en tu carrera
                        tecnológica, únete a nuestra comunidad y descubre todo
                        lo que podemos ofrecerte.
                    </p>
                    <div>
                        <button className=" rounded-full px-3 py-2 bg-blue_primary text-white  text-lg">
                            <a href="">Suscribete</a>
                        </button>
                    </div>
                </div>
                <div className="col-span-6 hidden md:flex   ">
                    <div className="flex items-center justify-center">
                        <Image
                            width={300}
                            height={300}
                            src="/pensando.png"
                            alt=""
                            className="h-full w-full object-cover  lg:-translate-y-10"
                        />
                    </div>
                </div>
                <div className="flex col-span-full items-center py-10 lg:pt-0 ">
                    <span className="border-t flex-grow"></span>
                    <span className="text-center px-5 font-medium text-gray-700">
                        Cursos disponibles
                    </span>
                    <span className="border-t flex-grow"></span>
                </div>
                <div className="flex flex-wrap gap-5 col-span-full">
                    {cursos.map((curso) => (
                            <CardCurso key={curso.id} curso={curso} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default EducacionPage;
