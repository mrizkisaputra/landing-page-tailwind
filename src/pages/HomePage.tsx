import {FC} from "react";
import Hero from "./../assets/images/hero.svg"
import AboutImage from "./../assets/images/about.svg"
import TextTitleAndContent from "../components/TextTitleAndContent.tsx";
import ServiceCard from "../components/ServiceCard.tsx";

const HomePage: FC = () => {
    return (
        <div className="homepage">
            <div className="container mx-auto px-4">
                <div className="hero pt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center">
                    <div className="box">
                        <TextTitleAndContent title="Belajar Membuat Website dengan Tailwind dan React"
                                             content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        <a href="#"
                           className="bg-sky-400 px-5 py-2 rounded-full text-white shadow transition-all hover:bg-sky-500">Tentang
                            Kami <i className="ri-eye-line"></i>
                        </a>
                    </div>
                    <div className="box">
                        <img src={Hero} className="w-[400px] lg:w-full"/>
                    </div>
                </div>

                <div className="about grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20 pt-20">
                    <div className="order-2 lg:order-1">
                        <img src={AboutImage} className="w-[400px] lg:w-full"/>
                    </div>
                    <div className="order-1 lg:order-2">
                        <TextTitleAndContent title="Belajar Tailwind dan React"
                                             content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    </div>
                </div>

                <div className="service pt-32" id="services">
                    <h1 className="text-center font-medium font-poppins text-3xl/tight mb-2 lg:text-5xl">Layanan Kami</h1>
                    <p className="text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                    <div className="service-box pt-12 grid md:grid-cols-3 gap-6">
                        <ServiceCard serviceTitle="Service Name"
                                     serviceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
                        <ServiceCard serviceTitle="Service Name"
                                     serviceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
                        <ServiceCard serviceTitle="Service Name"
                                     serviceDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;