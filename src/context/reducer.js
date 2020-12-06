import defaultImage from '../assets/images/default.png'

export const initialState = {
  images: [defaultImage],
  dark: true
}

export function reducer (state, action) {
  switch (action.type) {
    case 'RESET_IMAGES':
      return {
        ...state,
        images: [defaultImage]
      }
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.images
      }
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: !state.dark
      }
    default:
      return state
  }
}
