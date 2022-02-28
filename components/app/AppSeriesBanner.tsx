import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import {
  InformationCircleIcon,
  PlayIcon,
  VolumeUpIcon,
  VolumeOffIcon,
} from '@heroicons/react/solid'

const AppSeriesBanner: React.FC = () => {
  const [mute, setMute] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    setTimeout(() => {
      setShowVideo(true)
    }, 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setMute(true)
      setShowVideo(false)
    }
  }
  return (
    <Fragment>
      <div className='absolute top-0 left-0  w-full'>
        {showVideo ? (
          <video
            className='w-full object-fill min-h-[24rem] max-h-[67rem]'
            style={{
              WebkitMask:
                'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%)',
            }}
            autoPlay
            muted={mute}
            onEnded={() => {
              setShowVideo(false)
            }}
          >
            <source src='show/video-bg.mp4' type='video/mp4' />
          </video>
        ) : (
          <div
            style={{
              WebkitMask:
                'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%)',
            }}
            className='w-full object-fill min-h-[24rem] max-h-[67rem]'
          >
            <Image
              className='object-contain'
              src='/show/show-bg.jpg'
              alt='show-bg'
              width={2048 * 2}
              height={1152 * 2}
            />
          </div>
        )}
      </div>
      <div className='relative flex flex-col justify-center px-16 pt-0 lg:pt-5'>
        <div className='h-[80px] w-[80px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px]'>
          <Image
            className='object-contain'
            src='/show/show-logo.png'
            alt='logo'
            width={500}
            height={500}
          />
        </div>
        <p className='font-serif w-[70%] xl:w-[50%] 2xl:w-[40%] mt-4 text-sm text-[1.4vw] leading-4 lg:leading-7 '>
          A family is attacked by demons and only two members survive - Tanjiro and his
          sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a
          demon slayer to avenge his family and cure his sister.
        </p>
        <div className='flex my-4 lg:my-8 justify-between'>
          <div className='flex space-x-4 justify-en'>
            <button
              className='flex items-center rounded-sm py-2 px-5 bg-gray-100 justify-center text-black hover:bg-gray-400'
              onClick={() => {
                setShowVideo(prevVideo => !prevVideo)
                setMute(false)
              }}
            >
              <PlayIcon className=' h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mr-2' />
              <p className=' text-xs md:text-ms lg:text-lg xl:text-xl font-semibold'>
                {showVideo ? 'Stop' : 'Play'}
              </p>
            </button>
            <button className='flex items-center rounded-sm py-2 px-5 bg-gray-600 text-white justify-center hover:opacity-80 '>
              <InformationCircleIcon className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mr-2' />
              <p className=' text-xs md:text-ms lg:text-lg xl:text-xl font-semibold'>
                More Information
              </p>
            </button>
          </div>
          <button
            className='hidden md:flex translate-x-16  items-center rounded-sm py-2 px-5 bg-[rgba(60,60,60,0.6)] text-white justify-center hover:opacity-80'
            onClick={() => setMute(prevMute => !prevMute)}
          >
            {mute ? (
              <VolumeOffIcon className=' h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mr-2' />
            ) : (
              <VolumeUpIcon className=' h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mr-2' />
            )}
            <p className=' text-xs md:text-ms lg:text-lg xl:text-xl font-semibold'>
              {mute ? 'Unmute' : 'Mute'}
            </p>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default AppSeriesBanner
