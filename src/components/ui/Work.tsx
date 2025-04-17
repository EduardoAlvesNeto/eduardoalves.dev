import { Code, Task, Briefcase, People } from 'iconsax-react'

export default function WorkSection() {
    return (
        <section id='works' className='px-6 py-16 lg:px-16 flex flex-col items-center gap-10 w-full'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='font-bold text-4xl text-zinc-900 md:text-5xl'>Como posso te ajudar</h2>
                <p className='text-zinc-500 text-base max-w-md'>
                    Serviços e soluções que ofereço para transformar suas ideias em projetos reais.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm flex flex-col gap-3">
                    <Code className="size-10 stroke-blue-600" variant="Linear" />
                    <h3 className="font-medium text-lg text-zinc-900">Desenvolvimento web</h3>
                    <p className="text-sm text-zinc-500">
                        Criação de sites e apps rápidos, modernos e responsivos.
                    </p>
                </div>

                <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm flex flex-col gap-3">
                    <Task className="size-10 stroke-blue-600" variant="Linear" />
                    <h3 className="font-medium text-lg text-zinc-900">Soluções sob medida</h3>
                    <p className="text-sm text-zinc-500">
                        Funcionalidades específicas para o seu projeto ou negócio.
                    </p>
                </div>

                <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm flex flex-col gap-3">
                    <Briefcase className="size-10 stroke-blue-600" variant="Linear" />
                    <h3 className="font-medium text-lg text-zinc-900">Parcerias e freelas</h3>
                    <p className="text-sm text-zinc-500">
                        Atuação como dev parceiro em demandas pontuais ou recorrentes.
                    </p>
                </div>

                <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm flex flex-col gap-3">
                    <People className="size-10 stroke-blue-600" variant="Linear" />
                    <h3 className="font-medium text-lg text-zinc-900">Consultoria técnica</h3>
                    <p className="text-sm text-zinc-500">
                        Suporte para dúvidas técnicas, decisões de stack e melhorias.
                    </p>
                </div>
            </div>
        </section>
    )
}
