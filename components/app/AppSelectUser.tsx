import { selectedUserState } from '../../atoms/selectState'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

interface UserType {
  name: string
}

const User: React.FC<UserType> = ({ name }) => {
  const [user, setUser] = useRecoilState(selectedUserState)

  return (
    <div
      onClick={() => {
        setUser(name)
      }}
      className='text-center cursor-pointer hover:text-white '
    >
      <div className=' w-[10vw] max-w-[7rem] border-white rounded-md border-0 hover:border-[1px]'>
        <img src='/user.png' className='object-fill w-full ' />
      </div>
      <div>{name}</div>
    </div>
  )
}

const AppSelectUser = () => {
  return (
    <div className='bg-[rgb(20,20,20)] text-white flex flex-col h-screen'>
      <div className='px-10 py-5'>
        <Image src='/logo.svg' alt='logo' width={100} height={30} />
      </div>
      <div className='flex-grow flex flex-col justify-center items-center translate-y-[-8rem] space-y-12'>
        <div className='text-[3.5vw]'>Who is watching now?</div>
        <div className='flex text-[grey] space-x-5'>
          <User name='Matias' />
          <User name='Juan' />
          <User name='Victor' />
          <User name='Mafer' />
        </div>
        <div className=' border-[1px] border-[grey] text-[grey] py-1 px-2 text-[1.2vw] cursor-pointer hover:text-white hover:border-white'>
          Manage profiles
        </div>
      </div>
    </div>
  )
}

export default AppSelectUser
