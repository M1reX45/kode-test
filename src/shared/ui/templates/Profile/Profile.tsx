import { useLocation, useNavigate } from 'react-router-dom'
import { dateFormatter, getAge, phoneFormatter } from '~core/utils'
import * as SC from './Profile.styled'
import { Divider, Icons, Text } from '~ui/atoms'
import { PersonInfoField, PersonItem } from '~ui/molecules'

export const Profile = () => {
	const { state: person } = useLocation()
	const navigate = useNavigate()

	const age = getAge(person.birthday)
	const birthday = dateFormatter(person.birthday)
	const phone = phoneFormatter(person.phone)

	return (
		<>
			<SC.Header>
				<SC.Navbar>
					<SC.Backward onClick={() => navigate('/')}>
						<Icons.ChevronLeft />
					</SC.Backward>
				</SC.Navbar>
				<PersonItem person={person} isColumn />
			</SC.Header>
			<SC.Body>
				<PersonInfoField>
					<SC.Info>
						<Icons.Star />
						<Text weight='semibold'>{birthday}</Text>
					</SC.Info>
					<Text weight='semibold' color='tetriary'>
						{age}
					</Text>
				</PersonInfoField>
				<Divider />
				<PersonInfoField>
					<SC.Info onClick={() => window.open(`tel:${phone}`)}>
						<Icons.Phone />
						<Text weight='semibold'>{phone}</Text>
					</SC.Info>
				</PersonInfoField>
			</SC.Body>
		</>
	)
}
