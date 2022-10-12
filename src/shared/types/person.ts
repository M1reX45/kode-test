import { departments } from 'shared/core/constants/departments'

export interface Person {
	id: string
	avatarUrl: string
	firstName: string
	lastName: string
	userTag: string
	department: keyof typeof departments
	position: string
	birthday: string
	phone: string
}
