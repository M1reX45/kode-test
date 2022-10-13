import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Person } from '~types/person'
import * as SC from './PersonItem.styled'
import { Avatar, Text } from '~ui/atoms'

interface PersonItemProps {
	person: Person
	isColumn?: boolean
	sortType: 'abc' | 'birthday'
}

export const PersonItem: FC<PersonItemProps> = ({
	person,
	isColumn,
	sortType
}) => {
	const { id, avatarUrl, firstName, lastName, userTag, position, birthday } =
		person

	const navigate = useNavigate()

	return (
		<SC.Wrapper>
			<SC.PersonItem
				onClick={() => navigate(`/profile/${id}`)}
				$isColumn={isColumn}
			>
				<Avatar url={avatarUrl} isBig={isColumn} />
				<SC.Info $isColumn={isColumn}>
					<SC.Title $isColumn={isColumn}>
						<SC.Name $weight='semibold' $isColumn={isColumn}>
							{firstName} {lastName}
						</SC.Name>
						<SC.Tag
							$type='tagSmall'
							$color='tetriary'
							$isColumn={isColumn}
						>
							{userTag.toLowerCase()}
						</SC.Tag>
					</SC.Title>
					<Text type='caption' color='secondary'>
						{position}
					</Text>
				</SC.Info>
			</SC.PersonItem>
			{sortType === 'birthday' ? (
				<SC.Birthday>
					{new Date(Date.parse(birthday)).toLocaleString('ru', {
						month: 'short',
						day: 'numeric'
					})}
				</SC.Birthday>
			) : null}
		</SC.Wrapper>
	)
}
