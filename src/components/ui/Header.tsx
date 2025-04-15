'use client'

import { motion } from "motion/react";

import GithubIcon from "../icons/GithubIcon";
import Logo from "../icons/Logo";

export default function Header() {
    return (
        <header className="absolute px-6 py-8 lg:px-16 lg:py-8 w-dvw flex justify-between items-center">
            <motion.div
                whileHover={{
                    rotate: '-90deg',
                }}
                whileTap={{
                    scale: 0.9,
                }}
                transition={{
                    type: 'spring',
                    stiffness: '150'
                }}
                className="w-fit h-fit cursor-pointer"
            >
                <Logo />
            </motion.div>
            <nav className="hidden sm:flex">
                <ul className="flex gap-4 text-sm text-zinc-900">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#stack">Soluções</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Sobre mim</a></li>
                </ul>
            </nav>
            <button className="flex px-4 py-2 gap-3 bg-zinc-900 rounded-lg cursor-pointer">
                <GithubIcon />
                <span className="text-zinc-100">Github</span>
            </button>
        </header>
    )
}