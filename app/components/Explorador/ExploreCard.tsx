import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import styles from "@/app/styles";
import Image from "next/image";

const ExploreCard = ({
    id,
    imgUrl,
    title,
    index,
    active,
    handleClick,
}: any) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={`relative ${
                active === id
                    ? "lg:flex-[3.5] flex-[10]"
                    : "lg:flex-[0.5] flex-[2]"
            } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <Image
                width={500}
                height={500}
                src={imgUrl}
                alt={title}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />
            {/* lg:bottom-[60px] lg:rotate-[-90deg] lg:origin-[0.0] */}
            {active !== id ? (
                <h3 className="font-semibold sm:text-[26px] text-lg text-white absolute z-0 bottom-0 lg:-rotate-90 lg:right-0 lg:-translate-y-20 lg:translate-x-10 ">
                    {title}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                    <div
                        className={`${styles.flexCenter} w-[60px] h-[20px] rounded-[24px] glassmorphism-[16px]`}
                    >
                        {/* <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" /> */}
                    </div>
                    {/* <p className="font-normal text-[16px] leading-5 text-white uppercase">Sección</p> */}
                    <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-white -translate-y-5">
                        {title}
                    </h2>
                    <a
                        href={id}
                        className=" rounded-full  p-3 bg-blue_primary font-medium text-white"
                    >
                        Desplazarse
                    </a>
                </div>
            )}
        </motion.div>
    );
};

export default ExploreCard;
