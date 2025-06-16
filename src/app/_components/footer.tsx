import royal from "../../../public/royal.png"
import golden from "../../../public/golden.png"
import primier from "../../../public/primier.png"
import natural from "../../../public/natural.png"
import whiskas from "../../../public/whiskas.png"

import Image from "next/image"

import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr"

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8 ">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcar que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 100}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 gap-6 py-16">
          <div>
            <h4 className="font-bold text-lg mb-4 ">PetLovers</h4>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>

            <a
              href="#"
              className="bg-green-500 flex gap-2 items-center justify-center w-fit rounded-md px-3 py-1"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via Whatsapp
            </a>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>

            <ul className="flex flex-col gap-2">
              <li>
                <address>Rua dos Doguinhos Salientes, 123 </address>
              </li>
              <li>
                <address>Cidade, Estado - CEP - 12345-678</address>
              </li>
              <li>Telefone: (11) 94002-8922</li>
              <li>E-mail: petlovers@email.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>

            <div className="flex gap-2">
              <a href="#">
                <FacebookLogo className="w-7 h-7" />
              </a>
              <a href="#">
                <InstagramLogo className="w-7 h-7" />
              </a>
              <a href="#">
                <XLogo className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="block" data-aos="fade-down">
          <p className="text-center">
            &copy; 2025 PetLovers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
