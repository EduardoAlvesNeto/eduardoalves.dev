'use client';

import { GlobalSearch, Layer } from 'iconsax-react';
import { motion } from 'motion/react';

export default function StackSection() {
  return (
    <section id='stack' className='px-6 py-8 lg:px-16 lg:py-8 flex flex-col items-center gap-6 w-full bg-zinc-100 dark:bg-zinc-900 transition-colors duration-400 ease-in-out'>
      <div className='flex flex-col items-center'>
        <p className='font-bold text-5xl text-zinc-900 dark:text-zinc-100'>Stack</p>
        <p className='text-zinc-500 text-base text-center'>Tecnologias e boas práticas que uso para contruir suas ideais.</p>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 24
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.2
        }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full"
      >
        <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-8 shadow-sm rounded-xl w-full sm:w-[48%] lg:w-[23%] border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-2">
            <img src='react.webp' className="size-12 dark:bg-zinc-100 dark:p-1 dark:rounded-xl" alt="React" />
            <span className='text-blue-600'>+</span>
            <img src='next.webp' className="size-12 dark:bg-zinc-100 dark:p-1 dark:rounded-xl" alt="Next" />
          </div>
          <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl">
            <strong className="text-blue-600">Front</strong>end
          </p>
          <span className="text-zinc-600">
            React e Next.js são a base das minhas interfaces, combinando performance, SEO e ótima experiência para o usuário.
          </span>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-8 shadow-sm rounded-xl w-full sm:w-[48%] lg:w-[23%] border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-2">
            <img src='node.webp' className="size-12 dark:bg-zinc-100 dark:p-1 dark:rounded-xl" alt="Node" />
          </div>
          <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl">
            <strong className="text-blue-600">Back</strong>end
          </p>
          <span className="text-zinc-600">
            Node.js com Fastify me permite criar APIs rápidas, seguras e escaláveis, conectando dados e funcionalidades com eficiência.
          </span>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-8 shadow-sm rounded-xl w-full sm:w-[48%] lg:w-[23%] border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-2">
            <Layer className="fill-zinc-900 size-12 dark:bg-zinc-100 dark:p-1 dark:rounded-xl" variant="Bold" />
          </div>
          <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl">
            <strong className="text-blue-600">UI</strong>/UX
          </p>
          <span className="text-zinc-600">
            Desenvolvo interfaces focadas na experiência do usuário, com acessibilidade, clareza visual e boas práticas de design.
          </span>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 px-4 py-8 shadow-sm rounded-xl w-full sm:w-[48%] lg:w-[23%] border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-2">
            <GlobalSearch className="fill-zinc-900 size-12 dark:bg-zinc-100 dark:p-1 dark:rounded-xl" variant="Bold" />
          </div>
          <p className="text-zinc-900 dark:text-zinc-100 font-bold text-xl">
            <strong className="text-blue-600">S</strong>EO
          </p>
          <span className="text-zinc-600">
            Otimizo cada detalhe: meta tags, heading structure, imagens leves, sitemap e navegação interna bem estruturada.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
