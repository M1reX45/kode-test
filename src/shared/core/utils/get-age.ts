export const getAge = (date: string) => {
	return Math.floor(
		(Date.now() - new Date(date).getTime()) / (24 * 3600 * 365.25 * 1000)
	).toLocaleString('ru', { style: 'unit', unit: 'year', unitDisplay: 'long' })
}
