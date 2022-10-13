import { createStore, sample, createEvent } from 'effector'
import { Person } from '~types/person'
import { $currentDepartment } from '~features/departments'
import { $searchPhrase } from '~features/search-field'
import { filter, sort } from '~core/utils'
import { $sortType } from '~features/sort'

export const addPersonsToStore = createEvent<Person[]>()

export const $persons = createStore<Person[]>([])
	.on(addPersonsToStore, (_, persons) => [...sort(persons, 'abc')])
	.on($sortType, (persons, sortType) => [...sort(persons, sortType)])

export const $filteredPersons = createStore<Person[]>([])

sample({
	clock: [$currentDepartment, $searchPhrase, $persons],
	source: {
		persons: $persons,
		currentDepartment: $currentDepartment,
		searchPhrase: $searchPhrase
	},
	fn: ({ persons, searchPhrase }) => {
		return !searchPhrase ? persons : [...filter(persons, searchPhrase)]
	},
	target: $filteredPersons
})
