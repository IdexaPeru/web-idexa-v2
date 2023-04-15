import { Poppins, Roboto_Mono } from 'next/font/google'
import Head from "next/head";
import "./globals.css";

export const poppins = Poppins({
 variable: '--font-poppins',
 display: 'swap',
 subsets: ['latin'],
 weight: ['100','200','300','400','500','600','700']
})

const roboto_mono = Roboto_Mono({
    variable: '--font-roboto-mono',
    display: 'swap',
    subsets: ['latin'],
    weight: '700'
  });

export const metadata = {
    title: "Idexa Perú",
    description:
        "Idexa Perú ofrece soluciones innovadoras y personalizadas de servicios tecnológicos y educación tecnológica en Perú. Desarrollo de software, diseño web, marketing digital, capacitación en tecnología y más. Confíe en nosotros para llevar su negocio al siguiente nivel tecnológico.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
            <Head>
            </Head>
            <body className='selection:bg-blue_primary selection:text-black'>{children}</body>
        </html>
    );
}
