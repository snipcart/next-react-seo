import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'Hat',
            price: 20,
            description: 'Razor blades not included',
            image: 'https://snipcart.com/media/203631/hat.jpeg',
            id: 1
        },{
            name: 'Irish Whiskey',
            price: 55,
            description: 'From the most finest producers in Ireland',
            image: 'https://snipcart.com/media/203633/whiskey-bottle.jpg',
            id: 2
        },{
            name: 'Race horse',
            price: 2075,
            description: "We'll even make sure he wins. Everytime.",
            image: 'https://snipcart.com/media/203632/race-horse.png',
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