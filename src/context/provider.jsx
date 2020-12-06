import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'

export const Context = createContext(initialState)
export default function Provider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}
