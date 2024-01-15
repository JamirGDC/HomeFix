import React from "react";
import "../styles/about.css";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Acerca de Nosotros</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    HomeFix es plataforma revolucionaria diseñada para conectar a los clientes con profesionales de servicios básicos en un solo click. Nuestro objetivo es simplificar la búsqueda de expertos confiables en diversas áreas.
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600" style={{ textAlign: 'justify' }}>
                    Entendemos la importancia de encontrar el profesional adecuado en el momento justo. Por ello, en HomeFix, facilitamos un entorno donde los clientes pueden explorar perfiles detallados de profesionales en su ciudad, leer reseñas y calificaciones, y contactarlos directamente a través de un chat integrado para solicitar sus servicios. Estamos comprometidos con la calidad y la confianza, asegurando que cada profesional en nuestra plataforma no solo sea competente, sino también recomendado por la comunidad.
                    </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Equipo</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    Detrás de HomeFix hay un equipo de programadores apasionados y dedicados, liderados por Eduardo, Nilson y Husseim.
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    Eduardo, el maestro, aporta una perspectiva innovadora en el desarrollo de interfaces de usuario, garantizando que la experiencia de cada cliente sea intuitiva y amigable. Su pasión por la tecnología y su enfoque en el usuario final hacen que nuestra plataforma sea fácil de navegar.
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    Nilson, el arquitecto de software, es el cerebro detrás de nuestra robusta infraestructura. Con su amplia experiencia en sistemas y seguridad informática, Nilson asegura que la plataforma no solo sea eficiente, sino también segura y confiable.
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    Husseim, el mago del backend, trabaja incansablemente para que todas las características funcionen a la perfección. Desde el sistema de chat hasta el algoritmo de calificación, Husseim se asegura de que cada componente funcione armoniosamente, ofreciendo una experiencia sin interrupciones para nuestros usuarios.
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
                    Juntos, Eduardo, Nilson y Husseim forman un equipo imbatible, comprometidos con el éxito y la innovación en HomeFix.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
