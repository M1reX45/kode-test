import * as SC from '../Errors.styled'
import { Images, Text } from '~ui/atoms'
import { FC } from 'react'

interface CriticalProps {
	refetch: () => void
}

export const Critical: FC<CriticalProps> = ({ refetch }) => {
	return (
		<SC.Error>
			<Images.FlyingSaucer />
			<Text type='subtitle'>Какой-то сверхразум все сломал</Text>
			<Text weight='regular' color='tetriary'>
				Постараемся быстро починить
			</Text>
			<SC.RetryButton $weight='bold' onClick={() => refetch()}>
				Попробовать снова
			</SC.RetryButton>
		</SC.Error>
	)
}
