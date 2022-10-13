export const getBirthday = (date: string) => {
	const currentYear = new Date().getFullYear()
	const birthday = new Date(date)
	if (
		Math.floor(
			(birthday.setFullYear(currentYear) - Date.now()) /
				(24 * 3600 * 1000)
		) < 0
	)
		return birthday.setFullYear(currentYear + 1)
	return birthday.getTime()
}
