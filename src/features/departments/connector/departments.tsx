import { useStore } from 'effector-react'
import { DepartmentTabList } from '~ui/organisms'
import { $currentDepartment, setCurrentDepartment } from '../model'

export const DepartmentTabListConnector = () => {
	const currentDepartment = useStore($currentDepartment)

	return (
		<DepartmentTabList
			currentDepartment={currentDepartment}
			setCurrentDepartment={setCurrentDepartment}
		/>
	)
}
