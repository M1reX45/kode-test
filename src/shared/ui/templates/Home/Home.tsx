import * as SC from './Home.styled'
import { PersonListConnector } from '~features/persons/connector'
import { ModalConnector } from '~features/modal/connector'
import { Header } from '~ui/organisms'

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
