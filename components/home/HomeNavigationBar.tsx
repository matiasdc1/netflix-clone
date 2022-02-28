import { ChevronDownIcon, GlobeIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

interface HomeNavigationBarType {
  hideOptions: boolean
}

const HomeNavigationBar: React.FC<HomeNavigationBarType> = ({ hideOptions }) => {
  const router = useRouter()

  return (
    <nav className='absolute w-full flex p-5 items-center text-white mx-auto z-[200] '>
      <div className='w-24 md:w-40'>
        <img className='' src='/logo.svg' />
      </div>
      {!hideOptions && (
        <div className='flex flex-grow space-x-2 md:space-x-5 justify-end'>
          <button className='rounded-sm flex px-1 py-1 border-white border-[1px] items-center space-x-1'>
            <GlobeIcon className='h-3 w-3 md:h-5 md:w-5 ' />
            <div className='text-xs md:text-base'>English</div>
            <ChevronDownIcon className='h-3 w-3 md:h-5 md:w-5 ' />
          </button>
          <button
            onClick={() => router.push('/login')}
            className='bg-red-600 px-4 py-1 rounded-sm text-xs md:text-base'
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  )
}

export default HomeNavigationBar
