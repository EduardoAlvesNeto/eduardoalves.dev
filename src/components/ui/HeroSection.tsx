'use client'

import { Messages1, DocumentDownload, Mouse } from 'iconsax-react'
import { AnimatePresence, motion } from 'motion/react'

export default function HeroSection() {
    return (
        <section id='home' className="px-6 py-8 lg:px-16 lg:py-8 flex h-dvh md:flex-row items-center lg:justify-between gap-8">
            <div className='w-full flex justify-center lg:justify-between'>
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
                        <a href="#contact" className='flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl transition hover:bg-zinc-800 cursor-pointer'>
                            <Messages1 className="size-6 fill-white" variant="Bold" />
                            <span>Entre em contato</span>
                        </a>

                        <a
                            href='https://drive.google.com/uc?id=1WOYZ4Hzi6znJ8nMmni_iHJZLqs7bEzJs&export=download'
                            download
                            className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl transition hover:bg-blue-500"
                        >
                            <DocumentDownload className="size-6 fill-white" variant="Bold" />
                            <span>Baixar Currículo</span>
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center">
                    <img
                        className="w-[300px] sm:w-[400px]"
                        src='mockup.webp'
                        alt="Mockup"
                        loading='lazy'
                    />
                </div>
            </div>
            <AnimatePresence>
                <motion.div
                    initial={{
                        y: 8,
                        scale: 1
                    }}
                    animate={{
                        y: [0, -6, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}

                    className='absolute left-1/2 transform -translate-x-1/2 bottom-12'
                >
                    <Mouse className=' stroke-zinc-900 size-8' variant='Linear' />
                </motion.div>
            </AnimatePresence>
        </section>
    )
}