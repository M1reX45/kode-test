import { createStore, createEffect, sample } from 'effector'
import { fetchPersons } from '~core/api'
import { Person } from '~types/person'
import { $currentDepartment } from '~features/departments'
import { $searchPhrase } from '~features/search-field'
import { filter, sort } from '~core/utils'
import { $sortType } from '~features/sort'

export const fetchPersonsFx = createEffect(async (options: string) => {
	const persons = await fetchPersons(options)
	return persons
})

export const $persons = createStore<Person[]>([])
	.on(fetchPersonsFx.doneData, (_, persons) => [...sort(persons, 'abc')])
	.on($sortType, (persons, sortType) => [...sort(persons, sortType)])

export const $filteredPersons = createStore<Person[]>([])

export const $error = createStore<Error | null>(null)
	.on(fetchPersonsFx.failData, (_, error) => error)
	.reset(fetchPersonsFx)

sample({
	clock: [$currentDepartment, $searchPhrase, $persons],
	source: {
		persons: $persons,
		currentDepartment: $currentDepartment,
		searchPhrase: $searchPhrase
	},
	fn: ({ persons, currentDepartment, searchPhrase }) => {
		return !searchPhrase && currentDepartment === 'all'
			? persons
			: [...filter(persons, currentDepartment, searchPhrase)]
	},
	target: $filteredPersons
})
