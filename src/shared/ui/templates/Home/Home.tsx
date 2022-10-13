import * as SC from './Home.styled'
import { Header } from '~ui/organisms'
import { PersonListConnector } from '~features/persons/connector'
import { ModalConnector } from '~features/modal/connector'

export const Home = () => {
	return (
		<SC.Wrapper>
			<ModalConnector />
			<Header />
			<SC.Body>
				<PersonListConnector />
			</SC.Body>
		</SC.Wrapper>
	)
}
