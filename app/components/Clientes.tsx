const Clientes = () => {
    return (
        <section className=" ">
            <div className="bg-blue_light py-10">
                <h3 className="text-blue_primary font-poppins text-center text-lg">{`<< Colaboraciones >>`}</h3>
                <p className="text-black text-center font-poppins text-2xl">
                    Algunos de nuestros clientes
                </p>
                <p className="text-center text-gray-500 ">
                    Ellos confiaron en nosotros y ahora lo agradecen.
                </p>
            </div>
            <div className="flex  justify-between py-10 bg-white flex-wrap px-10 md:px-20 gap-5">
                <div className="flex justify-center items-center w-52">
                    <img
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681218875/IDEXA%20PERU/LOGOS/sanp_mbrmfm.png"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center w-24">
                    {" "}
                    <img
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681218875/IDEXA%20PERU/LOGOS/jr_opcbpf.png"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center w-24">
                    {" "}
                    <img
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681218875/IDEXA%20PERU/LOGOS/rest1_fzjtud.png"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center w-52">
                    {" "}
                    <img
                        src="https://res.cloudinary.com/dwkfj5sxb/image/upload/v1681218875/IDEXA%20PERU/LOGOS/cooking_fonjet.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Clientes;
