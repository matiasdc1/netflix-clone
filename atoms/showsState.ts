import { atom } from 'recoil'

const shows = [
  {
    id: 1,
    title: 'Ajin',
    match: 85,
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    seasons: 1,
    src: 'ajin.png',
  },
  {
    id: 2,
    title: 'Castlevania',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'castlevania.png',
  },
  {
    id: 3,
    title: 'Daredevil',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'daredevil.png',
  },
  {
    id: 4,
    title: 'Dota',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'dota.png',
  },
  {
    id: 5,
    title: 'Levius',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'levius.png',
  },
  {
    id: 6,
    title: 'Sword',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'sword.png',
  },
  {
    id: 7,
    title: 'Trese',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'trese.png',
  },
  {
    id: 8,
    title: 'The Witcher',
    categories: ['Gruesome', 'Dark', 'Suspenseful'],
    match: 85,
    seasons: 1,
    src: 'witcher.png',
  },
]

const availableShowsState = atom({
  key: 'availableShowsState',
  default: shows,
})

export { availableShowsState }
