import { Fragment } from 'react'
import { useRouter } from 'next/router'

interface HomeMainSectionType {
  hideText: boolean
  fullHeight: boolean
}

const HomeMainSection: React.FC<HomeMainSectionType> = ({ hideText }) => {
  const router = useRouter()

  return (
    <Fragment>
      <div
        className='relative z-[100] h-[450px] md:h-[500px] flex flex-col justify-center items-center space-y-5 px-4  w-full bg-["url(/home/home-bg.png)"]'
        style={{
          backgroundImage: 'url(/home/home-bg.png)',
          backgroundSize: 'cover',
        }}
      >
        {!hideText && (
          <Fragment>
            <h1 className='max-w-[640px] text-3xl md:text-5xl  font-semibold text-center'>
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className='text-xl md:text-3xl text-center font-medium'>
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className='text-base md:text-xl text-center max-w-[450px] font-normal '>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='flex flex-col md:flex-row  items-center justify-center '>
              <input
                className='py-2 px-4 w-full rounded-sm max-w-[500px] h-12'
                placeholder='Email address'
              />
              <button
                className='px-4 py-2 h-12 bg-red-600 rounded-sm font-medium w-60 mt-5 md:mt-0 md:text-lg lg:text-xl'
                onClick={() => router.push('/browse')}
              >
                Get started
              </button>
            </div>
          </Fragment>
        )}
      </div>
      <hr className='  border-[3px] opacity-60 border-[grey]' />
    </Fragment>
  )
}

export default HomeMainSection
