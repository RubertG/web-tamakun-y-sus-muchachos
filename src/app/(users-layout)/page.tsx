import { Header } from '@/modules/home/components/header/header'

export default function Home() {
  return (
    <>
      <Header className="mb-28 mt-40 md:mb-0 md:mt-14" />

      <div className="border-t border-border-default bg-bg-muted py-10">
        <p className="px-3 text-center text-sm font-medium text-text-secondary md:text-base">
          Muchos de nuestros clientes y fans que{' '}
          <span className="text-text-primary">
            confían en nosotros
          </span>{' '}
          dejaron su comentario.
        </p>
        <p className="mt-0.5 px-3 text-center text-sm font-medium text-text-secondary md:text-base">
          Deja el tuyo dando{' '}
          <span className="font-bold text-primary-100">
            clic aquí.
          </span>
        </p>
      </div>
    </>
  )
}
