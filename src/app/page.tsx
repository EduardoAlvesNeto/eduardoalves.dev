import Mockup from '@/../public/mockup.png'
import Logo from "@/components/icons/Logo";
import Header from "@/components/ui/Header";

import ReactPNG from '@/../public/react.png'
import NextPNG from '@/../public/next.png'
import NodePNG from '@/../public/node.png'

import { DocumentDownload, Messages1, Layer, GlobalSearch } from "iconsax-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex flex-col px-6 py-8 lg:px-16 lg:py-8 gap-8">
      <Header />
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-6 text-zinc-900 max-w-xl">
          <div className="flex flex-col gap-2">
            <p className="text-base lg:text-lg">Eduardo Alves</p>
            <p className="text-3xl lg:text-4xl font-bold leading-tight">
              Desenvolvedor <br />
              <span className="text-5xl lg:text-7xl font-extrabold">
                <span className="text-blue-600">Full</span>stack
              </span>
            </p>
            <p className="text-zinc-600 text-base lg:text-lg font-medium">
              Desenvolvo aplicações escaláveis usando as <br className="hidden lg:block" />
              tecnologias mais modernas do mercado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl transition hover:bg-zinc-800 cursor-pointer">
              <Messages1 className="size-6 fill-white" variant="Bold" />
              <span>Entre em contato</span>
            </button>
            <button className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl transition hover:bg-blue-500">
              <DocumentDownload className="size-6 fill-white" variant="Bold" />
              <span>Baixar Currículo</span>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex justify-center">
          <Image
            className="w-[300px] sm:w-[400px] object-contain"
            src={Mockup}
            alt="Mockup"
            priority
          />
        </div>
      </section>

      <section className='flex flex-col items-center gap-4 w-full'>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-5xl'>Stack</p>
          <p className='text-zinc-600 text-base'>Tecnologias e boas práticas que uso para contruir suas ideais.</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
          <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
            <div className="flex items-center gap-2 mb-2">
              <Image src={ReactPNG} className="size-12" alt="React" />
              <span>+</span>
              <Image src={NextPNG} className="size-12" alt="Next" />
            </div>
            <p className="text-zinc-900 font-bold text-xl">
              <strong className="text-blue-600">Front</strong>end
            </p>
            <span className="text-zinc-600">
              React e Next.js são as bases do meu desenvolvimento Front-End, garantindo performance e uma ótima experiência para o usuário.
            </span>
          </div>

          <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
            <div className="flex items-center gap-2 mb-2">
              <Image src={NodePNG} className="size-12" alt="Node" />
            </div>
            <p className="text-zinc-900 font-bold text-xl">
              <strong className="text-blue-600">Back</strong>end
            </p>
            <span className="text-zinc-600">
              No Back-End, utilizo Node.js e Fastify para construir APIs robustas que conectam dados, ideias e pessoas, sempre com foco em performance e segurança.
            </span>
          </div>

          <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
            <div className="flex items-center gap-2 mb-2">
              <Layer className="fill-zinc-900 size-12" variant="Bold" />
            </div>
            <p className="text-zinc-900 font-bold text-xl">
              <strong className="text-blue-600">UI</strong>/UX
            </p>
            <span className="text-zinc-600">
              Com foco em usabilidade e acessibilidade, construo interfaces intuitivas e agradáveis, baseadas em princípios de design centrado no usuário e boas práticas de UI/UX.
            </span>
          </div>

          <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
            <div className="flex items-center gap-2 mb-2">
              <GlobalSearch className="fill-zinc-900 size-12" variant="Bold" />
            </div>
            <p className="text-zinc-900 font-bold text-xl">
              <strong className="text-blue-600">S</strong>EO
            </p>
            <span className="text-zinc-600">
              Utilizo práticas de SEO on-page, como uso correto de heading tags, meta tags, otimização de imagens, sitemap, performance com lazy loading e estrutura de links internos bem definida.
            </span>
          </div>
        </div>


      </section>
    </div>
  );
}
