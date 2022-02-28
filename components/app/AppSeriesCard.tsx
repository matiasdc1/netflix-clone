import Image from 'next/image'
import useHover from '../../hooks/useHover'
import { debounce } from 'lodash'
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
  } from 'react'
import { hoveredModelPosState, hoveredShowIdState } from '../../atoms/selectState'
import { useRecoilState } from 'recoil'
import {
  PlayIcon,
  PlusCircleIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ArrowCircleDownIcon,
} from '@heroicons/react/solid'

interface ShowCardType {
  show: {
    id: number
    title: string
    match: number
    categories: string[]
    seasons: number
    src: string
  }
  size: number
}

// const ShowCard: React.FC<ShowCardType> = ({ show, size }) => {
//   const [hoverRef, isHovered] = useHover<HTMLDivElement>()

//   const [applyHover, setApplyHover] = useState(false)

//   useEffect(() => {
//     const time = setTimeout(() => {
//       setApplyHover(isHovered)
//     }, 300)
//     return () => {
//       clearTimeout(time)
//     }
//   }, [isHovered])

//   return (
//     <div
//       ref={hoverRef}
//       className={`text-sm pb-3 cursor-pointer delay-300 duration-300 ease-in-out relative ${
//         isHovered ? 'z-20' : 'z-0'
//       } hover:translate-y-[-5rem] hover:translate-x-[-3.7rem] `}
//       style={{
//         width: isHovered ? size * 1.5 : size,
//         height: isHovered ? 150 * 1.5 : 150,
//       }}
//     >
//       <div
//         className={`h-[150px] bg-red-200   ${
//           applyHover ? 'rounded-t-md' : 'rounded-md'
//         } `}
//         style={{
//           height: applyHover ? 150 * 1.5 : 150,
//         }}
//       >
//         <Image
//           src={'/logo.svg'}
//           width={applyHover ? size * 1.5 : size}
//           height={applyHover ? 150 * 1.5 : 150}
//         />
//       </div>
//       <div
//         className={`${applyHover ? 'block' : 'hidden'}
//         } w-full rounded-b-md  bg-[#181818] p-3`}
//       >
//         <div className='flex  items-center text-gray-400 mb-4'>
//           <div className='flex flex-grow space-x-1'>
//             <PlayIcon className='h-7 w-7 hover:text-gray-200' />
//             <PlusCircleIcon className='h-7 w-7 hover:text-gray-200' />
//             <ThumbUpIcon className='h-7 w-7 hover:text-gray-200' />
//             <ThumbDownIcon className='h-7 w-7 hover:text-gray-200' />
//           </div>
//           <ArrowCircleDownIcon className='h-7 w-7 hover:text-gray-200 flex ml-auto ' />
//         </div>
//         <p className='text-green-400 mb-1 '>{show.match}% for you</p>
//         <div className='flex gap-x-1 items-center text-white mb-2'>
//           <p className='border-2 px-1'>TV-MA</p>
//           <p>{show.seasons} temporadas</p>
//           <p className='border-2 px-1'>HD</p>
//         </div>
//         <div className='text-white flex space-x-1 items-center'>
//           {show.categories.map(cat => (
//             <Fragment>
//               <p className='text-gray-400 '>·</p>
//               <p> {cat}</p>
//             </Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

const AppSeriesCard: React.FC<ShowCardType> = ({ show, size }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedShowId, setSelectedShowId] = useRecoilState(hoveredShowIdState)
  const [hoverModelPos, setHoverModelPos] = useRecoilState(hoveredModelPosState)

  const handleMouseOver = () => {
    if (!ref?.current) return
    setSelectedShowId(show.id)
    const dims = ref.current.getBoundingClientRect()
    setHoverModelPos({
      y: dims.y,
      x: dims.x,
      top: dims.top,
      left: dims.left,
      width: dims.width,
      height: dims.height,
    })
    console.log(show.src)
  }

  return (
    <div
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => {}}
      className=' relative z-[500] text-sm cursor-pointer transition-transform delay-150  rounded-md'
      style={{
        width: size,
        height: (size * 192) / 341,
      }}
    >
      <img className='h-full' src={`/thumbs/${show.src}`} />
    </div>
  )
}

export default AppSeriesCard
