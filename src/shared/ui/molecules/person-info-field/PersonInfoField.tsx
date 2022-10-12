import { FC, ReactNode } from 'react'
import * as SC from './PersonInfoField.styled'

interface PersonInfoFieldProps {
	children: ReactNode
}

export const PersonInfoField: FC<PersonInfoFieldProps> = ({ children }) => {
	return <SC.PersonInfoField>{children}</SC.PersonInfoField>
}
