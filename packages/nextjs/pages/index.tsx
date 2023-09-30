import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Marketplace } from "~~/components/simpleNFT/Marketplace";
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          {/* <h1 className="text-center mb-6">
            <span className="block text-2xl mb-2">CarbonTrade</span>
            <span className="block text-4xl font-bold">Marketplace</span>
          </h1> */}
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-6xl" >
              <p className="text-center text-4xl mb-8 font-bold">
                ¡Bienvenidos al Futuro de la Sostenibilidad en Bolivia!
              </p>
            </div>
            <Image
              src="/background.png"
              width="1200"
              height="600"
              alt="challenge banner"
              className="rounded-custom border-4 border-primary mobile-image-container"
            />
            <div className="max-w-6xl">
              {/* <p className="text-center text-4xl mt-8 font-bold">¡Bienvenidos al Futuro de la Sostenibilidad en Bolivia!</p> */}
              <p className="text-center text-xl mt-8">
                Estamos muy emocionados de presentarles el primer mercado tokenizado de bonos de carbono en Bolivia. Este es un hito histórico que marca el comienzo de una nueva era en la lucha contra el cambio climático y la promoción de prácticas comerciales sostenibles en nuestro país.
              </p>
              <p className="text-center text-xl">
                Nuestra plataforma innovadora está diseñada para facilitar la inversión en proyectos de reducción de emisiones de carbono en Bolivia. Con la tokenización de bonos de carbono, los inversores locales e internacionales tienen la oportunidad de apoyar proyectos ecoamigables y a la vez obtener beneficios económicos. Esto crea un ecosistema de inversión que fomenta la sostenibilidad y contribuye al desarrollo sostenible de Bolivia.
              </p>
              <p className="text-center text-xl">
                En este mercado, los proyectos se someten a rigurosos estándares de verificación y cumplen con las normativas internacionales de reducción de emisiones. Cada token de carbono representa una parte del esfuerzo colectivo para combatir el cambio climático y preservar nuestro entorno.
              </p>
              <p className="text-center text-xl">
                Al unirse a nuestro mercado tokenizado, no solo estará invirtiendo en un futuro más limpio y sostenible para Bolivia, sino que también estará contribuyendo a la mitigación del calentamiento global a nivel global.
              </p>
              <p className="text-center text-xl">
                Únase a nosotros en esta emocionante travesía hacia un futuro más verde y próspero para Bolivia y el mundo. Juntos, estamos creando un impacto positivo que perdurará por generaciones venideras. ¡Acompáñenos en el primer mercado tokenizado de bonos de carbono en Bolivia y sea parte del cambio hoy mismo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
