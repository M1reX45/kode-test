export const dateFormatter = (date: string) => {
	return new Date(date)
		.toLocaleDateString('ru', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
		.replace(/( г.)$/, '')
}

export const phoneFormatter = (phone: string) => {
	return phone.replace(
		/([+7]{1,2})(\d{3})(\d{3})(\d{2})(\d{2})/,
		'$1 ($2) $3 $4 $5'
	)
}

export const birthdayFormatter = (date: string) => {
	return new Date(Date.parse(date))
		.toLocaleString('ru', {
			month: 'short',
			day: 'numeric'
		})
		.replace(/(\.)$/, '')
}
