import axios from 'axios'
import { Person } from '~types/person'

interface Responce {
	items: Person[]
}

export const fetchPersons = async (options: string) => {
	const { data } = await axios.get<Responce>(
		`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${options}`
	)
	return data.items
}
