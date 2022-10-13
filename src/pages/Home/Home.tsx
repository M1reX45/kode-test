import { ModalConnector } from '~features/modal/connector'
import { PersonListConnector } from '~features/persons/connector'
import { Home as Template } from '~ui/templates'

export const Home = () => {
	return (
		<Template
			personList={<PersonListConnector />}
			modal={<ModalConnector />}
		/>
	)
}
