import { FC } from 'react'
import * as SC from './Filter.styled'

interface FilterProps {
	isActive?: boolean
}

export const Filter: FC<FilterProps> = ({ isActive }) => {
	return <SC.Filter $isActive={isActive} />
}
