import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from 'react-icons/cg'

const AppFooter: React.FC = () => {
  return (
    <footer className='max-w-[1080px] mx-auto text-[grey] text-sm text-center px-16 mt-12 md:mt-28 space-y-6'>
      <div className='flex space-x-6 text-white'>
        <CgFacebook size={30} className='cursor-pointer' />
        <CgInstagram size={30} className='cursor-pointer' />
        <CgTwitter size={30} className='cursor-pointer' />
        <CgYoutube size={30} className='cursor-pointer' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        <div>
          <ul className='text-left space-y-3'>
            <li className='cursor-pointer hover:underline'>Audio y subtitulos</li>
            <li className='cursor-pointer hover:underline'>Prensa</li>
            <li className='cursor-pointer hover:underline'>Privacidad</li>
            <li className='cursor-pointer hover:underline'>Contáctanos</li>
          </ul>
        </div>
        <div>
          <ul className='text-left space-y-3 '>
            <li className='cursor-pointer hover:underline'>Audio descriptivo</li>
            <li className='cursor-pointer hover:underline'>
              Relaciones con inversionistas
            </li>
            <li className='cursor-pointer hover:underline'>Avisos Legales</li>
          </ul>
        </div>
        <div>
          <ul className='text-left space-y-3 mt-4 md:mt-0'>
            <li className='cursor-pointer hover:underline'>Centro de ayuda</li>
            <li className='cursor-pointer hover:underline'>Empleo</li>
            <li className='cursor-pointer hover:underline'>Preferencias de cookies</li>
          </ul>
        </div>
        <ul className='text-left space-y-3'>
          <li className='cursor-pointer hover:underline'>Tarjetas de regalo</li>
          <li className='cursor-pointer hover:underline'>Terminos de uso</li>
          <li className='cursor-pointer hover:underline'>Informacion corporativa</li>
        </ul>
      </div>
      <div className='text-left border-[1px] border-[grey] w-fit p-1 hover:text-white cursor-pointer '>
        Codigo de servicio
      </div>
      <div className='text-left pb-4'>1997-2022 Netflix, Inc.</div>
    </footer>
  )
}

export default AppFooter
