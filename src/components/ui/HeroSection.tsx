'use client'

import { Messages1, DocumentDownload, Mouse } from 'iconsax-react'
import { AnimatePresence, motion } from 'motion/react'

export default function HeroSection() {
    return (
        <section id='home' className="max-h-[80dvh] overflow-y-hidden px-6 lg:px-16 flex h-dvh md:flex-row  items-center lg:justify-between gap-8 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-400 ease-in-out">
            <div className="flex flex-col gap-6 text-zinc-900 dark:text-zinc-100">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="flex flex-col gap-2"
                >
                    <p className="text-base lg:text-lg">Eduardo Alves</p>
                    <p className="text-3xl lg:text-4xl font-bold leading-tight">
                        Desenvolvedor

                    </p>
                    <h1 className="text-5xl lg:text-7xl font-extrabold">
                        <span className="text-blue-600">Full</span>stack
                    </h1>
                    <p className="text-zinc-600 text-base lg:text-lg font-medium">
                        Desenvolvo aplicações escaláveis usando as <br className="hidden lg:block" />
                        tecnologias mais modernas do mercado.
                    </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -24
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.6,
                        type: 'spring'
                    }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a

                        href="#contact"
                        className='flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 rounded-xl transition hover:bg-zinc-800 cursor-pointer dark:bg-zinc-100 dark:hover:bg-zinc-200'
                    >
                        <Messages1 className="size-6 fill-zinc-100 dark:fill-zinc-900" variant="Bold" />
                        <span className='text-zinc-100 dark:text-zinc-900'>Entre em contato</span>
                    </a>

                    <a
                        href='https://drive.google.com/uc?id=1WOYZ4Hzi6znJ8nMmni_iHJZLqs7bEzJs&export=download'
                        download
                        className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl transition hover:bg-blue-500"
                    >
                        <DocumentDownload className="size-6 fill-white" variant="Bold" />
                        <span>Baixar Currículo</span>
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 24
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.4
                }}
                className="hidden md:flex sm:w-[50dvw] sm:max-h-full justify-end"
            >
                <img
                    className="w-[300px] sm:w-[250px] object-fill motion-safe:animate-pulse"
                    src='hero.webp'
                    alt="Imagem de um notebook com a logo 'E'"
                    loading='lazy'
                />
            </motion.div>
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
                    <Mouse className='stroke-zinc-900 size-8 dark:stroke-zinc-100' variant='Linear' />
                </motion.div>
            </AnimatePresence>
        </section>
    )
}