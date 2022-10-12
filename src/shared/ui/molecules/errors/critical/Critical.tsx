import * as SC from '../Errors.styled'
import { Images, Text } from '~ui/atoms'

export const Critical = () => {
	return (
		<SC.Error>
			<Images.FlyingSaucer />
			<Text type='subtitle'>Какой-то сверхразум все сломал</Text>
			<Text weight='regular' color='tetriary'>
				Постараемся быстро починить
			</Text>
			<SC.RetryButton $weight='bold'>Попробовать снова</SC.RetryButton>
		</SC.Error>
	)
}
