import { FC } from 'react'
import * as SC from './DepartmentTabItem.styled'
import { Text } from '~ui/atoms'

interface DeparmentTabItemProps {
	children: string
	isActive?: boolean
}

export const DepartmentTabItem: FC<DeparmentTabItemProps> = ({
	children,
	isActive
}) => {
	return (
		<SC.DepartmentTabItem $isActive={isActive}>
			<Text>{children}</Text>
		</SC.DepartmentTabItem>
	)
}
