import { FC } from 'react'
import { Person } from '~types/person'
import * as SC from './PersonItem.styled'
import { Avatar, Text } from '~ui/atoms'

interface PersonItemProps {
	person: Person
	isColumn?: boolean
}

export const PersonItem: FC<PersonItemProps> = ({ person, isColumn }) => {
	const { avatarUrl, firstName, lastName, userTag, position } = person

	return (
		<SC.PersonItem $isColumn={isColumn}>
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
	)
}
