import Input from '../ui/Input'
import validator from 'validator'
import { useRouter } from 'next/router'
import { useState } from 'react'

const HomeLogIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const router = useRouter()

  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)
    if (!validator.isEmail(email)) setEmailError(true)
    if (!validator.isStrongPassword(password)) setPasswordError(true)
  }

  return (
    <div className='bg-[rgba(0,0,0,0.8)] py-14 px-3 rounded-sm w-[18rem] md:w-[25rem] sm:px-10 translate-y-[-10rem] '>
      <h1 className=' text-4xl mb-7 font-semibold '>Sign In</h1>
      <form className='flex flex-col space-y-5 w-full' onSubmit={handleForm}>
        <Input
          text='Email or phone number'
          type='text'
          id='1'
          error={emailError}
          onChange={value => setEmail(value)}
        />
        <Input
          text='Password'
          type='password'
          id='2'
          error={passwordError}
          onChange={value => setPassword(value)}
        />
        <button
          className='bg-red-600 py-3 rounded-sm'
          onClick={() => router.push('/browse')}
        >
          Sign In
        </button>
      </form>
      <div className='flex justify-between mt-2'>
        <div className='text-[grey] text-sm lg:text-base  flex items-center'>
          <input className='cursor-pointer' type='checkbox' />
          <div className='ml-2'>Remember Me</div>
        </div>
        <div className='text-[grey] text-sm lg:text-base hover:underline cursor-pointer'>
          Need help?
        </div>
      </div>
      <div className='text-[grey] text-base lg:text-lg mt-4'>
        New to Netflix? <span className='text-white'>Sign up now.</span>
      </div>
      <p className='text-[grey] text-xs lg:text-sm mt-4'>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  )
}

export default HomeLogIn
