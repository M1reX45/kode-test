import { getBirthday } from '~core/utils'

export const getDivider = (prev: string, curr: string) => {
	const prevBirthday = new Date(getBirthday(prev)).getFullYear()
	const currBirthday = new Date(getBirthday(curr)).getFullYear()
	return currBirthday > prevBirthday
}
