import { atom } from 'recoil'

const hoveredShowIdState = atom({
  key: 'hoveredShowIdState',
  default: <number | null>null,
})

const showHoverModelState = atom({
  key: 'showHoverModelState',
  default: false,
})

const hoveredModelPosState = atom({
  key: 'hoveredModelPosState',
  default: {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    y: 0,
    x: 0,
  },
})

const selectedUserState = atom({
  key: ' selectedUserState',
  default: <string | null>null,
})

export {
  hoveredShowIdState,
  showHoverModelState,
  hoveredModelPosState,
  selectedUserState,
}
