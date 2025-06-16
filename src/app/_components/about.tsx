import Image from "next/image"

import about1Image from "../../../public/about-1.png"
import about2Image from "../../../public/about-2.png"

import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Image}
              alt="dog image"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
            <Image
              src={about2Image}
              alt="dog image"
              fill
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold">Sobre</h2>
          <p>
            Until one has loved an animal, a part of one's soul remains
            unawakened. We believe in it and we believe in easy access to things
            that are good for our mind, body and spirit. With a clever offering,
            superb support and a secure checkout you're in good hands.
          </p>

          <ul className="space-y-4">
            <li
              className="flex items-center gap-2"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <Check className="text-red-500" />
              Aberto desde 2006
            </li>
            <li
              className="flex items-center gap-2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Check className="text-red-500" />
              Equipe com mais de 10 veterinários
            </li>
            <li
              className="flex items-center gap-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <Check className="text-red-500" />
              Qualidade é a nossa prioridade
            </li>
          </ul>

          <div className="flex gap-2 ">
            <a
              className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              href="#"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via Whatsapp
            </a>
            <a
              className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              href="#"
            >
              <MapPin className="w-5 h-5 text-black" />
              Endereço da loja
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
