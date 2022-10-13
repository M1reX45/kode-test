import { Person } from '~types/person'

export const filter = (
	persons: Person[],
	currentDepartment: string,
	searchPhrase: string
) => {
	return persons.filter(person => {
		return (
			(`${person.firstName} ${person.lastName}`
				.toLocaleLowerCase()
				.includes(searchPhrase.toLocaleLowerCase()) ||
				person.userTag
					.toLocaleLowerCase()
					.includes(searchPhrase.toLocaleLowerCase())) &&
			(person.department === currentDepartment ||
				currentDepartment === 'all')
		)
	})
}
