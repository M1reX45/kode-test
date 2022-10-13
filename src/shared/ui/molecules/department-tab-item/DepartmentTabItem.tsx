import { FC } from 'react'
import * as SC from './DepartmentTabItem.styled'
import { Text } from '~ui/atoms'

interface DeparmentTabItemProps {
	children: string
	isActive?: boolean
	onClick: () => void
}

export const DepartmentTabItem: FC<DeparmentTabItemProps> = ({
	children,
	isActive,
	onClick
}) => {
	return (
		<SC.DepartmentTabItem $isActive={isActive} onClick={onClick}>
			<Text>{children}</Text>
		</SC.DepartmentTabItem>
	)
}
