import GithubIcon from "../icons/GithubIcon";
import Logo from "../icons/Logo";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center">
            <Logo />
            <nav className="hidden sm:flex">
                <ul className="flex gap-4 text-sm text-zinc-900">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Soluções</a></li>
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