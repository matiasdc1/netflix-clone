import { atom } from 'recoil'

const userState = atom({
  key: 'userState',
  default: {
    name: '',
    lastName: '',
    email: '',
    isSuscribed: '',
    expirationDate: '',
    autoRenewal: '',
  },
})

export { userState }
