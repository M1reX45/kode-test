import { FC, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Person } from '~types/person'
import { getDivider } from '~core/utils'
import * as SC from './PersonList.styled'
import { PersonItem, YearDivider } from '~ui/molecules'

interface PersonListProps {
	persons: Person[]
	sortType: 'abc' | 'birthday'
}

export const PersonList: FC<PersonListProps> = ({ persons, sortType }) => {
	const [divider, setDivider] = useState(false)
	const navigate = useNavigate()

	return (
		<SC.PersonList>
			{!divider && sortType === 'birthday' ? <YearDivider /> : null}
			{persons.map((person, index) => (
				<Fragment key={person.id}>
					{sortType === 'birthday' &&
					index > 0 &&
					getDivider(persons[index - 1].birthday, person.birthday)
						? (!divider && setDivider(true), (<YearDivider />))
						: null}
					<PersonItem
						person={person}
						sortType={sortType}
						onClick={() =>
							navigate(`/profile/${person.id}`, { state: person })
						}
					/>
				</Fragment>
			))}
		</SC.PersonList>
	)
}
