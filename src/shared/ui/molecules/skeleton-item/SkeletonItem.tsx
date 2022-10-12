import { FC } from 'react'
import * as SC from './SkeletonItem.styled'

export const SkeletonItem: FC = () => {
	return (
		<SC.SkeletonItem>
			<SC.Avatar />
			<SC.Info>
				<SC.Title />
				<SC.Subtitle />
			</SC.Info>
		</SC.SkeletonItem>
	)
}
