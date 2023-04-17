"use client";
import { useState } from "react";

const ModalSuscrib = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Abrir modal</button>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-950  bg-opacity-70 flex items-center justify-center ">
                    <div className=" bg-white relative z-30 min-w-[400px] rounded-lg p-5 -translate-y-20">
                        <h2>Modal</h2>
                        <p>Contenido del modal</p>
                        <button onClick={() => setIsModalOpen(false)}>
                            Cerrar modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalSuscrib;
