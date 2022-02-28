import HomeLogIn from '../components/home/HomeLogIn'
import HomeMainSection from '../components/home/HomeMainSection'
import HomeNavigationBar from '../components/home/HomeNavigationBar'
const LoginPage = () => {
  return (
    <div
      className='bg-black text-white relative w-[100vw]'
      style={{
        height: '100vh',
        backgroundImage: 'url(/home/home-bg.png)',
        backgroundSize: 'cover',
      }}
    >
      <HomeNavigationBar hideOptions={true} />
      <div className=' flex items-center justify-center h-full w-full'>
        <HomeLogIn />
      </div>
    </div>
  )
}

export default LoginPage
