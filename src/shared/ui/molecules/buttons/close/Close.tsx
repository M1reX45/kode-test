import { FC } from 'react'
import * as SC from './Close.styled'
import { Icons } from '~ui/atoms'

interface CloseProps {
	onClick: () => void
}

export const Close: FC<CloseProps> = ({ onClick }) => {
	return (
		<SC.Close onClick={onClick}>
			<Icons.Cross />
		</SC.Close>
	)
}
