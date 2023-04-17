import Clientes from "./components/Clientes";
import Desarrollo from "./components/Desarrollo";
import Educacion from "./components/Educacion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import MasServicios from "./components/MasServicios";
import Servicios from "./components/Servicios";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBrzq2hJ-w205SpB1j9cyKkuIWwbFEufSY",
    authDomain: "idexa-peru.firebaseapp.com",
    projectId: "idexa-peru",
    storageBucket: "idexa-peru.appspot.com",
    messagingSenderId: "597924543696",
    appId: "1:597924543696:web:c3fca7261f010a9cf832d5"
  };
  
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   logEvent(analytics, 'notification_received');

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
