import Logo from "../icons/Logo"

export default function Footer() {
    return (
        <footer className="flex justify-between items-center px-6 py-6 lg:px-16 w-full bg-zinc-900">
            <div className="flex items-center">
                <Logo className="size-18" />
            </div>
            <div>
                <p className="text-zinc-500 text-xs md:text-sm">© 2025 Eduardo Alves — Desenvolvedor Fullstack</p>
            </div>
        </footer>
    )
}