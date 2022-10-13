import * as SC from './Header.styled'
import { Text } from '~ui/atoms'
import { DepartmentTabListConnector } from '~features/departments/connector/departments'
import { SearchFieldConnector } from '~features/search-field/connector'

export const Header = () => {
	return (
		<SC.Header>
			<Text type='titleLarge'>Поиск</Text>
			<SearchFieldConnector />
			<DepartmentTabListConnector />
		</SC.Header>
	)
}
