"use client";

import { useState } from "react";
import ExploreCard from "./Explorador/ExploreCard";


const listaServicios = [
    {
        id: "#desarrollo",
        imgUrl: "https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Leonardo_Diffusion_illustration_hyperrealistic_of_astronaut_fl_2_yqrg3v.jpg",
        titulo: "Desarrollo Web",
    },
    {
        id: "#educacion",
        imgUrl: "https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Default_adobe_illustrator_vector_2d_cat_programming_in_a_mac_l_3_a3837865-67bb-42e6-906e-1c0f15c802e4_1_zgnlfw.jpg",
        titulo: "Educación Virtual",
    },
    {
        id: "#soporte",
        imgUrl: "https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144362/IDEXA%20PERU/Leonardo_Diffusion_cute_illustration_of_a_happy_computer_engi_3_uhqyni.jpg",
        titulo: "Soporte Técnico",
    },
    {
        id: "#disenio",
        imgUrl: "https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144332/IDEXA%20PERU/yelsino_colorful_image_to_present_the_theme_graphic_design_repr_09fac712-f511-4b68-bdd4-6d73a0b015a1_altfvd.png",
        titulo: "Diseño Gráfico",
    },
    {
        id: "#asesoramiento",
        imgUrl: "https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681144361/IDEXA%20PERU/DreamShaper_32_deadpool_with_computer_programming_hacker_background_mysteri_6_axfzls.jpg",
        titulo: "Asesoramiento Informático",
    },
];


const Servicios = () => {
    const [cardActivo, setCardActivo] = useState("#desarrollo");
    return (
        <section className=" bg-blue_light py-10 scroll-mt-[64px]" id="servicios">
            <div className="  max-w-7xl mx-auto px-10 sm:px-20">
                <h3 className="text-blue_primary font-poppins text-center text-lg">{`<< Nuestro servicios >>`}</h3>
                <p className="text-black text-center font-poppins text-2xl">
                    Sepa mas de su tema en interes
                </p>
                <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {listaServicios.map((item, index) => (
                        <ExploreCard
                            id={item.id}
                            imgUrl={item.imgUrl}
                            title={item.titulo}
                            index={index}
                            active={cardActivo}
                            handleClick={setCardActivo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
