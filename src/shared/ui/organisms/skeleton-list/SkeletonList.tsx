import { FC } from 'react'

import * as SC from './SkeletonList.styled'
import { SkeletonItem } from '~ui/molecules'

interface SkeletonListProps {
	amount?: number
}

export const SkeletonList: FC<SkeletonListProps> = ({ amount = 10 }) => {
	const array = new Array(amount).fill('')

	return (
		<SC.SkeletonList>
			{array.map((_, i) => (
				<SkeletonItem key={i} />
			))}
		</SC.SkeletonList>
	)
}
