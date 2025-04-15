import { GlobalSearch, Layer } from 'iconsax-react'

export default function StackSection() {
    return (
        <section id='stack' className='px-6 py-8 lg:px-16 lg:py-8 flex flex-col items-center gap-4 w-full'>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-5xl'>Stack</p>
                <p className='text-zinc-600 text-base text-center'>Tecnologias e boas práticas que uso para contruir suas ideais.</p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
                <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
                    <div className="flex items-center gap-2 mb-2">
                        <img src='react.png' className="size-12" alt="React" />
                        <span>+</span>
                        <img src='next.png' className="size-12" alt="Next" />
                    </div>
                    <p className="text-zinc-900 font-bold text-xl">
                        <strong className="text-blue-600">Front</strong>end
                    </p>
                    <span className="text-zinc-600">
                        React e Next.js são a base das minhas interfaces, combinando performance, SEO e ótima experiência para o usuário.
                    </span>
                </div>

                <div className="px-4 py-8 shadow-xs shadow-zinc-300 rounded-xl w-full sm:w-[48%] lg:w-[23%]">
                    <div className="flex items-center gap-2 mb-2">
                        <img src='node.png' className="size-12" alt="Node" />
                    </div>
                    <p className="text-zinc-900 font-bold text-xl">
                        <strong className="text-blue-600">Back</strong>end
                    </p>
                    <span className="text-zinc-600">
                        Node.js com Fastify me permite criar APIs rápidas, seguras e escaláveis, conectando dados e funcionalidades com eficiência.
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
                        Desenvolvo interfaces focadas na experiência do usuário, com acessibilidade, clareza visual e boas práticas de design.
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
                        Otimizo cada detalhe: meta tags, heading structure, imagens leves, sitemap e navegação interna bem estruturada.
                    </span>
                </div>
            </div>


        </section>
    )
}