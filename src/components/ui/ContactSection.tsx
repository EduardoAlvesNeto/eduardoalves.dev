import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center gap-6 px-6 py-12 lg:px-16 w-dvw h-auto bg-zinc-900 text-center">
      <header>
        <h2 className="font-[Inter] text-zinc-100 text-3xl md:text-4xl font-semibold leading-snug">
          Torne sua <span className="bg-blue-600 px-1 rounded-md">presença digital</span> impossível de ignorar.
        </h2>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base md:text-lg">
          Entre em contato e descubra como uma aplicação sob medida pode transformar sua marca online.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="https://wa.me/558496793578?text=Olá%2C%20gostaria%20de%20falar%20sobre%20meu%20projeto"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg transition hover:bg-zinc-200 hover:outline-blue-600 outline-2 outline-zinc-100 outline-offset-4 duration-200"
        >
          <span>Entre em contato</span>
        </a>
      </div>

      <div className="flex gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/eduardoalvesdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="size-8 duration-300 fill-zinc-100 hover:fill-[#0A66C2] transition-all" />
        </a>
        <a
          href="https://www.instagram.com/duardodev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon className="size-8 duration-300 fill-zinc-100 hover:fill-[#E1306C] rounded-sm transition-all" />
        </a>
      </div>
    </section>
  );
}
