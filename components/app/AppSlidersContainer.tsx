import AppSlider from './AppSlider'

const AppSlidersContainer: React.FC = () => {
  return (
    <div className='mt-10'>
      <AppSlider id={0} title={'East Asian TV Shows'} />
      <AppSlider id={1} title={'Trending Now'} />
      <AppSlider id={2} title={'Popular on Netflix'} />
      <AppSlider id={3} title={'Watch it Again'} />
      <AppSlider id={4} title={'Only on Netflix'} />
      <AppSlider id={5} title={'Watch Together for Older Kids'} />
      <AppSlider id={6} title={'Anime'} />
    </div>
  )
}

export default AppSlidersContainer
