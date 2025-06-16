import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import dogImage from "../../../public/hero-dog.webp"
import catImage from "../../../public/cat-hero.png"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt="dog image"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              href="https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <strong className="bg-black text-white px-2 rounded-md">
                  5%
                </strong>
                de desconto na primeira compra.
              </p>

              <div className="flex">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImage}
                    alt="cat image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImage}
              alt="dog image"
              className="object-contain "
              sizes="(max-width: 5768px) 0px, 50vw"
              fill
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}
