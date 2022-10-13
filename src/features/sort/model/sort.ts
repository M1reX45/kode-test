import { createStore, createEvent } from 'effector'

export const setSortType = createEvent<'abc' | 'birthday'>()

export const $sortType = createStore<'abc' | 'birthday'>('abc').on(
	setSortType,
	(_, sortType) => sortType
)
