import { Fragment } from 'react'

interface HomeSecondarySectionType {
  side: 'left' | 'right' | string
  title: string
  description: string
  video: boolean
  imgSrc: string
  videoSrc?: string
  top?: string
  left?: string
  width?: string
}

const HomeSecondarySection: React.FC<HomeSecondarySectionType> = ({
  side,
  title,
  description,
  video,
  imgSrc,
  videoSrc,
  top,
  left,
  width,
}) => {
  const content = (
    <Fragment>
      <div className='w-[50%] relative'>
        <img className='object-contain relative z-50' alt='image' src={imgSrc} />
        {video && (
          <div
            style={{ top: `${top}%`, left: `${left}% `, width: `${width}%` }}
            className='absolute'
          >
            <video autoPlay muted>
              <source src={videoSrc} type='video/mp4' />
            </video>
          </div>
        )}
      </div>
    </Fragment>
  )

  return (
    <Fragment>
      <div className=' flex  items-center max-w-[800px] mx-auto py-24 px-4'>
        {side === 'left' && content}
        <div className='w-[50%] space-y-3'>
          <h1 className='text-2xl md:text-4xl  font-semibold text-left'>{title}</h1>
          <h2 className='text-base md:text-xl text-left font-medium'>{description}</h2>
        </div>
        {side !== 'left' && content}
      </div>
      <hr className='border-[3px] opacity-60 border-[grey]' />
    </Fragment>
  )
}

export default HomeSecondarySection
