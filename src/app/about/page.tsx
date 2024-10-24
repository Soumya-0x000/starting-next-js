import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: 'About Us',
        description: 'Learning NextJS',
        applicationName: 'Next App',
        authors: {
            url: 'https://portfolio-five-mu-72.vercel.app',
            name: 'Soumya Sankar Das',
        },
        themeColor: 'Dark',
        creator: 'Me(Soumya)',
        publisher: 'Vercel',
    };
} 

const AboutUs = () => {
    return (
        <div className=" h-screen bg-slate-900 text-gray-300">
            Read about us
        </div>
    );
};

export default AboutUs;
