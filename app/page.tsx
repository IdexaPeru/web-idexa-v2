import Clientes from "./components/Clientes";
import Desarrollo from "./components/Desarrollo";
import Educacion from "./components/Educacion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import MasServicios from "./components/MasServicios";
import Servicios from "./components/Servicios";

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Header />
            <Inicio />
            <Servicios />
            <Educacion />
            <Desarrollo />
            <MasServicios />
            <Clientes />
            <Footer />
        </main>
    );
}
