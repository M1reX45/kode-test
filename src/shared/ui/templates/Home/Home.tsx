import { FC, ReactNode } from 'react'
import * as SC from './Home.styled'
import { Header } from '~ui/organisms'

interface HomeProps {
	modal: ReactNode
	personList: ReactNode
}

export const Home: FC<HomeProps> = ({ modal, personList }) => {
	return (
		<SC.Wrapper>
			{modal}
			<Header />
			<SC.Body>{personList}</SC.Body>
		</SC.Wrapper>
	)
}
