import axios from 'axios'
import { Responce } from '~types/api'

export const PersonsController = {
	fetch: async (department: string) => {
		const { data } = await axios.get<Responce>(
			`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`
		)
		return data
	}
}
