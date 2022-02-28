import HomeMainSection from '../components/home/HomeMainSection'
import HomeNavigationBar from '../components/home/HomeNavigationBar'
import HomeSecondarySection from '../components/home/HomeSecondarySection'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const sections = [
    {
      video: true,
      imgSrc: '/home/tv.png',
      side: 'right',
      title: 'Enjoy on your TV.',
      description:
        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      top: '20.5',
      left: '13',
      width: '73',
    },
    {
      video: false,
      imgSrc: '/home/mobile.png',
      side: 'left',
      title: 'Download your shows to watch offline.',
      description: 'Save your favorites easily and always have something to watch.',
    },
    {
      video: true,
      imgSrc: '/home/pc.png',
      videoSrc: '/home/pc-video.mp4',
      side: 'right',
      title: 'Create profiles for kids.',
      description:
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
      top: '10',
      left: '18',
      width: '64',
    },
    {
      video: false,
      imgSrc: '/home/kids.png',
      side: 'left',
      title: 'Create profiles for kids.',
      description:
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    },
  ]

  return (
    <div className='bg-black text-white relative w-[100vw]'>
      <HomeNavigationBar hideOptions={false} />
      <HomeMainSection hideText={false} fullHeight={false} />
      {sections.map((section, i) => (
        <HomeSecondarySection
          key={i}
          side={section.side}
          title={section.title}
          description={section.description}
          video={section.video}
          imgSrc={section.imgSrc}
          videoSrc={section.videoSrc}
          top={section.top}
          left={section.left}
          width={section.width}
        />
      ))}
    </div>
  )
}

export default Home
