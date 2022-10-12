import { FC } from 'react'
import * as SC from '../Errors.styled'
import { Images, Text } from '~ui/atoms'

interface EmptyProps {
	onClick?: () => void
}

export const Empty: FC<EmptyProps> = ({ onClick }) => {
	return (
		<SC.Error>
			<Images.MagnifyingGlass />
			<Text type='subtitle'>Мы никого не нашли</Text>
			<div onClick={onClick}>
				<Text weight='regular' color='tetriary'>
					Попробуй скорректировать запрос
				</Text>
			</div>
		</SC.Error>
	)
}
