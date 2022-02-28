import AppSeriesCard from './AppSeriesCard'
import useHover from '../../hooks/useHover'
import { availableShowsState } from '../../atoms/showsState'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRecoilValue } from 'recoil'
import { useWindowSize } from '../../hooks/useWindowSize'

interface ShowsCategoryType {
  title: string
  id: number
}

const AppSlider: React.FC<ShowsCategoryType> = ({ title, id }) => {
  const { width } = useWindowSize()
  const shows = useRecoilValue(availableShowsState)

  const [slidesPerView, setSlidesPerView] = useState(6)
  const [spacePerSlide, setSpacePerSlide] = useState(10)
  const [cardSize, setCardSize] = useState(240)

  const [swiper, setSwiper] = useState(null)
  const [hoverRef, isHovered] = useHover()

  useEffect(() => {
    if (!hoverRef?.current?.clientWidth || !width) return
    if (hoverRef.current.clientWidth <= 500) {
      setCardSize((hoverRef.current.clientWidth / 2.2) | 0)
      setSlidesPerView(2)
    }
    if (width >= 500 && width < 800) {
      setCardSize((hoverRef.current.clientWidth / 3.2) | 0)
      setSlidesPerView(3)
    }
    if (width >= 800 && width < 1100) {
      setCardSize((hoverRef.current.clientWidth / 4.2) | 0)
      setSlidesPerView(4)
    }
    if (width >= 1100 && width < 1400) {
      setCardSize((hoverRef.current.clientWidth / 5.2) | 0)
      setSlidesPerView(5)
    }
    if (width >= 1400) {
      setCardSize((hoverRef.current.clientWidth / 6.2) | 0)
      setSlidesPerView(6)
    }
  }, [width, hoverRef])

  useEffect(() => {
    //@ts-ignore
    setSwiper(document.querySelectorAll('.swiper')[id].swiper)

    return () => {
      setSwiper(null)
    }
  }, [id])

  return (
    <div ref={hoverRef} className='mb-2 relative'>
      <p className='text-base md:text-xl font-semibold mb-4 px-6 lg:px-16 '>{title}</p>
      <div className='flex items-center relative px-6 lg:px-16'>
        <ChevronLeftIcon
          style={{ visibility: isHovered ? 'visible' : 'hidden' }}
          className=' w-12 h-12 cursor-pointer hover:bg-[rgba(40,40,40,0.3)] absolute z-[500] left-0 hover:scale-125'
          onClick={() => {
            //@ts-ignore
            swiper?.slidePrev()
          }}
        />
        {/* <div className='flex  space-x-2 overflow-x-scroll overflow-y-hidden scrollbar-hide '>
          {shows.map((show, i) => (
            <ShowCard show={show} size={cardSize} />
          ))}
        </div> */}
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spacePerSlide}
          // centeredSlides
          className='px-20'
        >
          {shows.map((show, i) => (
            <SwiperSlide className='flex items-center' key={i}>
              <AppSeriesCard show={show} size={cardSize} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ChevronRightIcon
          style={{ visibility: isHovered ? 'visible' : 'hidden' }}
          className='w-12 h-12 cursor-pointer hover:bg-[rgba(40,40,40,0.3)] absolute z-[500]  right-0 hover:scale-125'
          onClick={() => {
            //@ts-ignore
            swiper.slideNext()
          }}
        />
      </div>
    </div>
  )
}

//overflow-y-scroll scrollbar-hide
export default AppSlider
