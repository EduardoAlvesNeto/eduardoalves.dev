'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun1 } from 'iconsax-react';
import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import Logo from '../icons/Logo';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="px-6 py-8 max-h-[20dvh] lg:px-16 lg:py-8 w-dvw flex justify-between items-center bg-zinc-100 dark:bg-zinc-900 transition-colors duration-400 ease-in-out">
      <motion.div
        whileHover={{
          rotate: '-90deg',
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          scale: 1
        }}
        transition={{
          type: 'spring',
          stiffness: '150'
        }}
        className="w-fit h-fit cursor-pointer"
      >
        <Logo className="size-12 fill-zinc-900 dark:fill-zinc-100" />
      </motion.div>
      <nav className="hidden sm:flex">
        <ul className="flex gap-4 text-sm text-zinc-900 dark:text-zinc-100">
          <li className="hover:text-blue-600 hover:scale-[1.05] duration-200"><a href="#home">Início</a></li>
          <li className="hover:text-blue-600 hover:scale-[1.05] duration-200"><a href="#works">Soluções</a></li>
          <li className="hover:text-blue-600 hover:scale-[1.05] duration-200"><a href="#stack">Tecnologias</a></li>
          <li className="hover:text-blue-600 hover:scale-[1.05] duration-200"><a href="#contact">Contato</a></li>
          <li className="hover:text-blue-600 hover:scale-[1.05] duration-200"><a href="">Sobre mim</a></li>
        </ul>
      </nav>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="flex px-4 py-2 rounded-lg cursor-pointer"
        aria-label='Mudar para modo escuro'
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Moon variant="Linear" className="stroke-zinc-100 size-6" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Sun1 variant="Linear" className="stroke-zinc-900 size-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </header >
  );
}
