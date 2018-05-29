import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'My first product',
            price: 50,
            description: 'I like turtles',
            image: 'url',
            id: 1
        },{
            name: 'My second product',
            price: 100,
            description: 'I like zonks',
            image: 'url',
            id: 2
        },{
            name: 'My third product',
            price: 150,
            description: 'I like dragons',
            image: 'url',
            id: 3
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState)
}