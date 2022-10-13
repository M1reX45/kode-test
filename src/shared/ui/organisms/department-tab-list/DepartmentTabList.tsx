import { FC } from 'react'
import * as SC from './DepartmentTabList.styled'
import { DepartmentTabItem } from '~ui/molecules'
import { departments } from '~core/constants'

const departmentsTabList = Object.keys(departments)

interface DepartmentTabListProps {
	currentDepartment: string
	setCurrentDepartment: (department: string) => void
}

export const DepartmentTabList: FC<DepartmentTabListProps> = ({
	currentDepartment,
	setCurrentDepartment
}) => {
	return (
		<SC.DepartmentTabList>
			{departmentsTabList.map(department => (
				<DepartmentTabItem
					key={department}
					isActive={department === currentDepartment}
					onClick={() => setCurrentDepartment(department)}
				>
					{departments[department]}
				</DepartmentTabItem>
			))}
		</SC.DepartmentTabList>
	)
}
