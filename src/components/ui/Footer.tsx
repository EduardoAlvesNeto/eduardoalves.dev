import Logo from '../icons/Logo';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-6 py-6 lg:px-16 w-full bg-zinc-900">
      <div className="relative w-full h-[2px] bg-zinc-800"></div>
      <div className="flex justify-between items-center px-6 py-6 lg:px-16 w-full bg-zinc-900">
        <div className="flex items-center">
          <Logo className="size-12 fill-zinc-100" />
        </div>
        <div>
          <p className="text-zinc-300 text-[10px] md:text-sm text-center">© 2025 Eduardo Alves — Desenvolvedor Fullstack</p>
        </div>
      </div>
    </footer>
  );
}
