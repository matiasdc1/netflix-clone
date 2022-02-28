import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useRef, useState } from 'react'

interface InputType {
  text: string
  type: string
  id: string
  error: boolean
  onChange: (value: string) => void
}

const Input: React.FC<InputType> = ({ text, type, id, error, onChange }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const [realType, setRealType] = useState(type)
  const ref = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOut)
    return () => {
      removeEventListener('mousedown', handleClickOut)
    }
  }, [])

  const handleClickOut = (e: any) => {
    //@ts-ignore
    if (!ref?.current?.contains(e.target)) setFocused(false)
  }

  const handleValueChange = (e: any) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <Fragment>
      <div
        ref={ref}
        className='flex bg-[rgb(51,51,51)] px-4 py-2 rounded-sm w-full h-14 items-center relative'
        style={{
          flexDirection: focused || value ? 'column' : 'row',
        }}
        onClick={() => {
          setFocused(true)
          //@ts-ignore
          setTimeout(() => document.getElementById(id).focus(), [20])
        }}
        onChange={handleValueChange}
      >
        <h3
          className='text-[rgb(129,140,140)] transition-transform '
          style={{
            width: focused || value ? '100%' : '80%',
            fontSize: focused || value ? '0.7rem' : '1rem',
          }}
        >
          {text}
        </h3>
        <input
          id={id}
          required
          name={type}
          className='bg-[rgb(51,51,51)] mb-2 border-0 border-none focus:outline-0 active:bg-[rgb(51,51,51)] hover:bg-[rgb(51,51,51)]'
          type={realType}
          disabled={!focused}
          autoComplete='off'
          style={{ width: focused || value ? '100%' : '20%' }}
        />

        {focused && type === 'password' && (
          <Fragment>
            {realType === 'password' && (
              <EyeIcon
                onClick={() => {
                  setRealType('text')
                }}
                className='absolute right-3 top-5 h-5 w-5 cursor-pointer hover:text-[grey]'
              />
            )}
            {realType !== 'password' && (
              <EyeOffIcon
                onClick={() => {
                  setRealType('password')
                }}
                className='absolute right-3 top-5 h-5 w-5 cursor-pointer hover:text-[grey]'
              />
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Input
