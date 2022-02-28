import Image from 'next/image'
import { hoveredShowIdState } from '../../atoms/selectState'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  BellIcon,
  SearchIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid'

const AppNavigationBar: React.FC = () => {
  const id = useRecoilValue(hoveredShowIdState)
  const [active, setActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

    return () => window.removeEventListener('scroll', changeBackground)
  }, [])

  const changeBackground = () => {
    if (window.scrollY <= 62) setActive(false)
    else setActive(true)
  }

  return (
    <nav
      className={`sticky top-0 z-[1000] px-5 lg:px-14 py-1 ${
        active ? 'animate-nav_fade_in' : 'animate-nav_fade_out'
      }`}
    >
      <div className='flex py-4 items-center animate'>
        <div className='cursor-pointer flex items-center mr-3 lg:mr-10'>
          <Image src='/logo.svg' alt='logo' width={100} height={30} />
        </div>
        <div className='flex-grow text-sm lg:text-base'>
          <ul className='block lg:hidden max-w-[4rem]'>
            <li className='flex items-center hover:text-gray-300 cursor-pointer'>
              <p>Browse</p>
              <ChevronDownIcon className='h-4 w-4 sm:h-5 sm:w-5' />
            </li>
          </ul>
          <ul className='hidden lg:flex space-x-5  align-middle'>
            <li className='hover:text-gray-300 cursor-pointer'>Home</li>
            <li className='hover:text-gray-300 cursor-pointer'>TV Shows</li>
            <li className='hover:text-gray-300 cursor-pointer'>Movies</li>
            <li className='hover:text-gray-300 cursor-pointer'>New & Popular</li>
            <li className='hover:text-gray-300 cursor-pointer'>My List</li>
          </ul>
        </div>
        <div className='text-sm lg:text-base'>
          <ul className='flex space-x-5 items-center'>
            <li className='hover:text-gray-300 cursor-pointer'>
              <SearchIcon className='h-4 w-4 sm:h-5 sm:w-5' />
            </li>
            <li className='hidden md:block md:hover:text-gray-300 cursor-pointer'>
              Kids
            </li>
            <li className='hover:text-gray-300 cursor-pointer'>
              <BellIcon className='h-4 w-4 md:h-5 md:w-5' />
            </li>
            <li className='flex hover:text-gray-300 cursor-pointer items-center'>
              <Image
                className='rounded-sm'
                src='/user.png'
                alt='user'
                width={30}
                height={30}
              />
              <ChevronDownIcon className='h-4 w-4 sm:h-5 sm:w-5' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppNavigationBar
