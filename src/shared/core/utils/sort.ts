import { Person } from '~types/person'
import { getBirthday } from '~core/utils'

type SortType = 'abc' | 'birthday'

export const sort = (persons: Person[], sortType: SortType): Person[] => {
	switch (sortType) {
		case 'abc':
			return persons.sort((a, b) => {
				return (a['firstName'] + a['lastName']).localeCompare(
					b['firstName'] + b['lastName']
				)
			})
		case 'birthday':
			return persons.sort((a, b) => {
				return getBirthday(a['birthday']) - getBirthday(b['birthday'])
			})
	}
}
