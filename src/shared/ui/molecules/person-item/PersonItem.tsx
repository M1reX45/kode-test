import { FC } from 'react'
import { Person } from '~types/person'
import { birthdayFormatter } from '~core/utils'
import * as SC from './PersonItem.styled'
import { Avatar, Text } from '~ui/atoms'

interface PersonItemProps {
	person: Person
	isColumn?: boolean
	sortType?: 'abc' | 'birthday'
	onClick?: () => void
}

export const PersonItem: FC<PersonItemProps> = ({
	person,
	isColumn,
	sortType,
	onClick
}) => {
	const { avatarUrl, firstName, lastName, userTag, position, birthday } =
		person

	return (
		<SC.Wrapper $isColumn={isColumn}>
			<SC.PersonItem onClick={onClick} $isColumn={isColumn}>
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
					<Text type='date' color='secondary'>
						{birthdayFormatter(birthday)}
					</Text>
				</SC.Birthday>
			) : null}
		</SC.Wrapper>
	)
}
