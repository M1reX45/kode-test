import { createStore, createEvent } from 'effector'

export const setSearchPhrase = createEvent<string>()

export const $searchPhrase = createStore('').on(
	setSearchPhrase,
	(_, searchPhrase) => searchPhrase
)
