import { Text } from '~ui/atoms'
import * as SC from './YearDivider.styled'

export const YearDivider = () => {
	const nextYear = new Date().getFullYear() + 1

	return (
		<SC.YearDivider>
			<Text weight='semibold' color='tetriary'>
				{nextYear}
			</Text>
		</SC.YearDivider>
	)
}
