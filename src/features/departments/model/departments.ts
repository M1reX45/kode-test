import { createStore, createEvent } from 'effector'

export const setCurrentDepartment = createEvent<string>()

export const $currentDepartment = createStore('all').on(
	setCurrentDepartment,
	(_, department) => department
)
