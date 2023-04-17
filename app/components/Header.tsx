import Image from "next/image";
import { LOGO } from "../Variables/imagenes";

const items = [
    {
        id: "#inicio",
        titulo: "Inicio",
        url: "",
    },
    {
        id: "#servicios",
        titulo: "Servicios",
        url: "",
    },
    {
        id: "#educacion",
        titulo: "Educación",
        url: "",
    },
    {
        id: "#desarrollo",
        titulo: "Desarrollo",
        url: "",
    },
];

const Header = () => {
    return (
        <header className=" fixed border w-full bg-white z-20">
            <div className="mx-auto max-w-7xl flex items-center justify-between  text-lg transition-all  ease-in-out duration-500 z-50 py-2 top-0 bg-white px-10 md:px-20">
                <div className="flex items-center text-3xl font-poppins  gap-2">
                    <Image 
                        width={300}
                        height={300}
                    src={LOGO} className="w-14" alt="logo de idexa peru" />
                    <h1>
                        <span className="text-purple_primary">IDE</span>
                        <span className="text-blue_primary">XA</span>
                    </h1>
                </div>
                <nav className="flex gap-x-5 items-center justify-center">
                    <ul className="justify-between hidden gap-3 absolute  mt-5 mr-10 sm:relative sm:flex sm:mt-0 sm:mr-0 transition ease-in duration-300 bg-white text-purple_normal">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="hover:bg-fuchsia-100 cursor-pointer transition ease-in duration-300 px-1"
                            >
                                <a href={item.id}>{item.titulo}</a>
                            </li>
                        ))}
                    </ul>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple_normal"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </span>
                </nav>
            </div>
        </header>
    );
};

export default Header;
